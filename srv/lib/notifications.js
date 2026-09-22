/**
 * Sends an email notification to a spacefarer.
 * Temporarily, this function logs the email content to the console instead of sending an actual email.
 *
 * @param {Object} spacefarer - The spacefarer to notify.
 */
export async function sendEmailNotification(spacefarer) {
    // eslint-disable-next-line no-console
    console.log(
        `Dear ${spacefarer.name},\n\n` +
        `Welcome to the Galactic Spacefarer Adventure! We are thrilled to have you on board as a spacefarer.\n\n` +
        `Your journey begins with a basic wormhole navigation skill level of ${spacefarer.wormholeNavigationSkill} and a stardust collection of ${spacefarer.stardustCollection}.\n\n` +
        `Remember to pick up your ${spacefarer.spaceSuitColor} colored space suit before embarking on your interstellar journey!`
    );
}
