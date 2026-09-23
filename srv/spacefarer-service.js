import cds from '@sap/cds'
import { isNil } from 'lodash-es'
import { sendEmailNotification } from './lib/notifications.js'
import { isValidEmail } from './lib/validators.js'

export default cds.service.impl(function () {
  const { Spacefarers } = this.entities

  // Validation for every write
  this.before(['CREATE', 'UPDATE'], Spacefarers, req => {
    const s = req.data

    if ('email' in s && !isValidEmail(s.email))
      req.error({ code: 400, message: 'Invalid email address!', target: 'email' })

    if (s.wormholeNavigationSkill > 5 || s.wormholeNavigationSkill < 0)
      req.error({
        code: 400,
        message: 'Wormhole navigation skill must be between 0 and 5!',
        target: 'wormholeNavigationSkill',
      })

    if (s.stardustCollection < 0)
      req.error({ code: 400, message: 'Stardust collection cannot be negative!', target: 'stardustCollection' })
  })

  // Preparation for the journey for the spacefarer only after they are created.
  this.before('CREATE', Spacefarers, req => {
    const s = req.data
    if (isNil(s.wormholeNavigationSkill) || s.wormholeNavigationSkill === 0) s.wormholeNavigationSkill = 1
    if (isNil(s.stardustCollection)) s.stardustCollection = 0
    s.stardustCollection += 100
  })

  //Send a notification email to the spacefarer only after they are created.
  this.after(['CREATE'], Spacefarers, async (_, req) => {
    try {
      await sendEmailNotification(req.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to send cosmic email notification: ', error.message)
    }
  })
})
