import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_FROM = 'onboarding@resend.dev'

/**
 * Sends an email notification to a spacefarer.
 * Temporarily, this function logs the email content to the console instead of sending an actual email.
 *
 * @param {Object} spacefarer - The spacefarer to notify.
 */
export async function sendEmailNotification(spacefarer) {
  const isResendApiKeySet = process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== ''

  if (!isResendApiKeySet) {
    // eslint-disable-next-line no-console
    console.log(
      `RESEND API KEY IS NOT SET! - Sending notification trough console:\n\n` +
        `Dear ${spacefarer.name},\n\n` +
        `Welcome to the Galactic Spacefarer Adventure! We are thrilled to have you on board as a spacefarer.\n\n` +
        `Your journey begins with a basic wormhole navigation skill level of ${spacefarer.wormholeNavigationSkill} and a stardust collection of ${spacefarer.stardustCollection}.\n\n` +
        `Remember to pick up your ${spacefarer.spaceSuitColor} colored space suit before embarking on your interstellar journey!`,
    )

    return
  }

  const { data } = await resend.emails.send({
    from: EMAIL_FROM,
    to: 'kovacs.boldizsar0321@gmail.com',
    subject: 'Welcome to the Galactic Spacefarer Adventure!',
    text:
      `Dear ${spacefarer.name},\n\n` +
      `Welcome to the Galactic Spacefarer Adventure! We are thrilled to have you on board as a spacefarer.\n\n` +
      `Your journey begins with a basic wormhole navigation skill level of ${spacefarer.wormholeNavigationSkill} and a stardust collection of ${spacefarer.stardustCollection}.\n\n` +
      `Remember to pick up your ${spacefarer.spaceSuitColor} colored space suit before embarking on your interstellar journey!`,
  })

  return data
}
