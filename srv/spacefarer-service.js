import cds from '@sap/cds';
import { sendEmailNotification } from './lib/notifications.js';

export default cds.service.impl(function () {
    const { Spacefarers } = this.entities;

    this.before('CREATE', Spacefarers, (req) => {
        const s = req.data;

        /**
         * Spacefarers are prepared for their journey:
         * If they lack the wormhole navigation skill, they are given a basic level of 1.
         */
        if (s.wormholeNavigationSkill > 5 || s.wormholeNavigationSkill < 0)
            return req.reject(400, 'Wormhole navigation skill must be between 0 and 5!')
        if (s.wormholeNavigationSkill === null || s.wormholeNavigationSkill === 0) s.wormholeNavigationSkill = 1;

        if (s.stardustCollection < 0)
            return req.reject(400, 'Stardust collection cannot be negative!');
        if (s.stardustCollection == null) s.stardustCollection = 0;

        // Welcome the new spacefarer with a small stardust collection to start their journey.
        s.stardustCollection += 100;
    });

    this.after('CREATE', Spacefarers, async (_, req) => {
        try {
            await sendEmailNotification(req.data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to send cosmic email notification: ', error.message);
        }
    });
});
