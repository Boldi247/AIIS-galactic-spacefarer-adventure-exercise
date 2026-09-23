# AIIS Galactic Spacefarer Adventure Exercise

This is my solution for the AIIS take-home exercise for the full-stack developer role. I enjoyed working on this project and exploring the SAP CAP framework, and the small dive into Fiori FE development.

## Testing the application

### Running the application

Please run `npm install` to install the dependencies, and then run `cds watch` to start the application. You can access the application at `http://localhost:4004`.

### Important environment variables, mock users

Please keep in mind, that I integrated Resend for sending emails (to congratulate new spacefarers on their journey). You will (optionally) need to set the `RESEND_API_KEY` environment variable in order to send emails. You can get a free API key from [Resend](https://resend.com/) with a fully free account.
Keep in mind that Resend - by the current configuration - will only send emails to the account owner's email address, so make sure to use the email address you used to create your Resend account.
If this API key is not set, the application will still work, but the email sending functionality will be disabled - a simple console log will be printed instead.

As the application is protected by authentication, you can use the following mock users to log in:

- Username: `y-farer`, Password: `y-farer` (from Planet Y)
- Username: `x-farer`, Password: `x-farer` (from Planet X)
- Username: `admin`, Password: `admin` (admin privileges, can see all spacefarers, regardless of their planet)
