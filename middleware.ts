import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/lib/i18n";
export default createMiddleware({ locales, defaultLocale, localePrefix: "never" });
export const config = { matcher: ["/", "/(es|en|it|fr|de)/:path*"] };
