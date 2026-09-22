import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_FROM = 'onboarding@resend.dev'

/**
 * Sends an email notification to a spacefarer.
 * If the RESEND_API_KEY environment variable is not set, the notification will be logged to the console instead of being sent.
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
    to: spacefarer.email,
    subject: 'Welcome to the Galactic Spacefarer Adventure!',
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
        <h1 style="color: #1a1a2e;">Welcome aboard, ${spacefarer.name}!</h1>
        <p>Welcome to the Galactic Spacefarer Adventure! We are thrilled to have you on board as a spacefarer.</p>
        <p>You have been given a set of initial resources to start your journey, see the list below:</p>
        <ul>
          <li><strong>Wormhole navigation skill:</strong> ${spacefarer.wormholeNavigationSkill}</li>
          <li><strong>Stardust collection:</strong> ${spacefarer.stardustCollection}</li>
          <li><strong>Spacesuit color:</strong> ${spacefarer.spaceSuitColor}</li>
        </ul>
        <p>Fly safe, ${spacefarer.name}.</p>
      </div>
    `,
  })

  return data
}
