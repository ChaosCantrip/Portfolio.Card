import "@/styles/global/master.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({ children }){
    return (
        <html>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}