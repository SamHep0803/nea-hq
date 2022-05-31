import passport from "passport";
import OAuth2Strategy, { VerifyCallback } from "passport-oauth2";

passport.serializeUser((user: any, done: any) => {
	done(null, user);
});

passport.deserializeUser((id: string, done: any) => {
	done(null, null);
});

passport.use(
	new OAuth2Strategy(
		{
			authorizationURL: `${process.env.VATSIM_URL}/oauth/authorize?response_type=code`,
			tokenURL: `${process.env.VATSIM_URL}/oauth/token`,
			scope: process.env.VATSIM_SCOPES,
			clientID: process.env.VATSIM_CLIENT_ID,
			clientSecret: process.env.VATSIM_CLIENT_SECRET,
			callbackURL: process.env.VATSIM_CALLBACK_URL,
		},
		(
			accessToken: string,
			refreshToken: string,
			profile: any,
			done: VerifyCallback
		) => {
			return done(null, accessToken);
		}
	)
);

export default passport;
