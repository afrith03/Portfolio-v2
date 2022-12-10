// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    require("dotenv").config();

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      // host: "smtp.gmail.com",
      service: "Gmail",
      auth: {
        user: "afrithshariff20@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });
    const mailData = {
      from: "afrithshariff20@gmail.com",
      to: req.body.email,
      bcc: "afrithshariff123@gmail.com",
      //bcc: "afrith.s@dyooti.com",
      subject: `Got your message,${req.body.name}!`,
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
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
         a{
        color: rgb(175, 100, 221);
         }
         a:hover{
        color: #39cacb;
         }
         svg{
        margin-left: 2px;
        margin-right: 2px;
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
                                            Hi ${req.body.name} ,
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              margin-bottom: 16px;
                                              color: #3dcacb;
                                            "
                                          >
                                            I just received your message "${req.body.description}" via my
                                            website. I'll get back to you as soon as
                                            possible.
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
                                          <p style="margin: 0; margin-bottom: 12px">
                                          </p>
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
                                              href="https://afrithshariff.me"
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
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="social-table"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                            "
                                            width="210px"
                                          >
                                            <tr>
                                              <td style="padding: 0 5px 0 5px">
                                                <a
                                                  href="https://github.com/afrith03"
                                                  target="_blank"
                                                  ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg></a>
                                              </td>
                                              <td style="padding: 0 5px 0 5px">
                                                <a
                                                  href="https://www.linkedin.com/in/afrithshariff/"
                                                  target="_blank"
                                                  ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    fill="currentColor"
                                                    class="bi bi-linkedin"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                                    /></svg
                                                ></a>
                                              </td>
                                              <td style="padding: 0 5px 0 5px">
                                                <a
                                                  href="https://www.instagram.com/afrith_03/"
                                                  target="_blank"
                                                  ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    fill="currentColor"
                                                    class="bi bi-instagram"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                    /></svg
                                                ></a>
                                              </td>
                                              <td style="padding: 0 5px 0 5px">
                                                <a
                                                  href="https://wa.me/qr/TL66KUYLFWQUF1"
                                                  target="_blank"
                                                  ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    fill="currentColor"
                                                    class="bi bi-whatsapp"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                                    />
                                                  </svg>
                                                </a>
                                              </td>
                                              <td style="padding: 0 5px 0 5px">
                                                <a
                                                  href="https://afrithshariff.me"
                                                  target="_blank"
                                                  ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    fill="currentColor"
                                                    class="bi bi-link-45deg"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path
                                                      d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                                                    />
                                                    <path
                                                      d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                                                    /></svg
                                                ></a>
                                              </td>
                                            </tr>
                                          </table>
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
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
    res.status(200).json({ mail: "success" ,
  request :req.body});
  } else {
    // Handle any other HTTP method
    res
      .status(200)
      .json({ ApiStatus: "Working! but you are not using post method" });
  }
}
