import nodemailer from "nodemailer";
var Filter = require('bad-words'),
    filter = new Filter();
    filter.addWords('lavade', 'boobs', 'ommala');

export default async (req, res) => {
  //de structuring
  const { name, email, description } = req.body;
  let filetrName = filter.clean(name)
  let filetrDescription = filter.clean(description)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "afrithshariff20@gmail.com",
      pass: process.env.password,
    },
  });

  try {
    await transporter.sendMail({
      from: "afrithshariff20@gmail.com",
      to: email,
      bcc: "afrithshariff123@gmail.com",
      //bcc: "afrith.s@dyooti.com",
      subject: `Got your message, ${filetrName}!`,
      //text: req.body.description + " | Sent from: " + req.body.email,
      html: `<!DOCTYPE html>
      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
      
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
          />
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
            .bicons {
              margin: 8px;
            }
            a {
              color: rgb(175, 100, 221);
            }
            a:hover {
              color: #39cacb;
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            @media (max-width: 620px) {
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
      
              .row-1 .column-1 .block-3.paragraph_block td.pad,
              .row-1 .column-1 .block-5.social_block td.pad {
                padding: 10px !important;
              }
      
              .row-1 .column-1 .block-1.heading_block td.pad {
                padding: 15px 5px 5px !important;
              }
      
              .row-1 .column-1 .block-1.heading_block h1 {
                font-size: 26px !important;
              }
      
              .row-1 .column-1 .block-6.paragraph_block td.pad > div {
                font-size: 9px !important;
              }
      
              .row-1 .column-1 .block-6.paragraph_block td.pad {
                padding: 5px !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #1b0023;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #1b0023;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 600px;
                            "
                            width="600"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-top: 30px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            color: #39cacb;
                                            direction: ltr;
                                            font-family: 'Montserrat', 'Trebuchet MS',
                                              'Lucida Grande', 'Lucida Sans Unicode',
                                              'Lucida Sans', Tahoma, sans-serif;
                                            font-size: 37px;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: left;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Hi there, Thank you for getting in touch!
                                            What can I do for you?</span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad" style="padding-top: 60px">
                                        <div
                                          style="
                                            color: #3dcacb;
                                            direction: ltr;
                                            font-family: 'Montserrat', 'Trebuchet MS',
                                              'Lucida Grande', 'Lucida Sans Unicode',
                                              'Lucida Sans', Tahoma, sans-serif;
                                            font-size: 16px;
                                            font-weight: 400;
                                            letter-spacing: 0px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 19.2px;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              margin-bottom: 16px;
                                              color: #3dcacb;
                                            "
                                          >
                                            Hi ${filetrName} ,
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              margin-bottom: 16px;
                                              color: #3dcacb;
                                            "
                                          >
                                            I just received your message
                                            "${filetrDescription}" via my website. I'll get
                                            back to you as soon as possible.
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              color: #3dcacb;
                                              margin-bottom: 16px;
                                            "
                                          >
                                            If you are looking for another way to
                                            contact me, Yes, that is certainly
                                            possible. You can reach me at
                                            <a
                                              style="color: #3dcacb"
                                              href="tel:++919941841699"
                                              >+91 9941841699</a
                                            >
                                            via WhatsApp.
                                          </p>
                                          <p style="margin: 0; color: #3dcacb">
                                            Thank you for your interest in contacting
                                            me.
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #39cacb;
                                            font-size: 15px;
                                            font-family: 'Montserrat', 'Trebuchet MS',
                                              'Lucida Grande', 'Lucida Sans Unicode',
                                              'Lucida Sans', Tahoma, sans-serif;
                                            font-weight: 400;
                                            line-height: 120%;
                                            text-align: left;
                                            direction: ltr;
                                            letter-spacing: 0px;
                                            mso-line-height-alt: 18px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; margin-bottom: 12px"
                                          ></p>
                                          <p
                                            style="
                                              margin: 0;
                                              margin-bottom: 12px;
                                              color: #3dcacb;
                                            "
                                          >
                                            Warm regards,
                                          </p>
                                          <p style="margin: 0">
                                            <a
                                              href="https://afrith.me"
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #39cacb;
                                              "
                                              target="_blank"
                                              >Afrith Shariff Y</a
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          text-align: center;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div>
                                          <a
                                            class="bicons"
                                            href="https://github.com/afrith03"
                                            target="_blank"
                                            ><i class="bi bi-github"></i
                                          ></a>
      
                                          <a
                                            class="bicons"
                                            href="https://www.linkedin.com/in/afrithshariff/"
                                            target="_blank"
                                            ><i class="bi bi-linkedin"></i
                                          ></a>
      
                                          <a
                                            class="bicons"
                                            href="https://www.instagram.com/afrith_03/"
                                            target="_blank"
                                            ><i class="bi bi-instagram"></i
                                          ></a>
      
                                          <a
                                            class="bicons"
                                            href="https://wa.me/qr/TL66KUYLFWQUF1"
                                            target="_blank"
                                            ><i class="bi bi-whatsapp"></i
                                          ></a>
      
                                          <a
                                            class="bicons"
                                            href="https://afrith.me"
                                            target="_blank"
                                            ><i class="bi bi-link-45deg"></i
                                          ></a>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad" style="padding-bottom: 60px">
                                        <div
                                          style="
                                            color: #3c8f90;
                                            font-size: 10px;
                                            font-family: 'Montserrat', 'Trebuchet MS',
                                              'Lucida Grande', 'Lucida Sans Unicode',
                                              'Lucida Sans', Tahoma, sans-serif;
                                            font-weight: 400;
                                            line-height: 120%;
                                            text-align: left;
                                            direction: ltr;
                                            letter-spacing: 0px;
                                            mso-line-height-alt: 12px;
                                          "
                                        >
                                          <p style="margin: 0; margin-bottom: 16px">
                                             
                                          </p>
                                          <p style="margin: 0; color: #3dcacb">
                                            Note:- This is my secondary email
                                            generated by system, If you want to send
                                            official communication I'd prefer
                                            <a
                                              href="mailto:afrithshariff123@gmail.com?subject=Hey!%20lets%20get%20in%20touch."
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #3dcacb;
                                              "
                                              target="_blank"
                                              title="afrithshariff123@gmail.com"
                                              >afrithshariff123@gmail.com and do not
                                              reply to this mail.</a
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
