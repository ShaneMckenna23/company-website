const CONTACT_ADDRESS = 'shanemckennadev@gmail.com';
const querystring = require('querystring');

const mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

exports.handler = (event, context, callback) => {
  const body = querystring.parse(event.body);
  mailer.sendMail(
    {
      from: body.from,
      to: [CONTACT_ADDRESS],
      subject: body.subject || 'Thank You',
      html: body.message || saleEmail,
    },
    (err, info) => {
      if (err) return callback(err);
      callback(null, { statusCode: 200, body: 'Success!' });
    }
  );
};

const saleEmail = `<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- [if !mso]> <!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- <![endif] -->
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrightWave</title>
<style type="text/css">
  .ExternalClass {
      width: 100%;
  }
  
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div,
  .ExternalClass b,
  .ExternalClass br,
  .ExternalClass img {
      line-height: 100% !important;
  }
  
  body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
  }
  
  body,
  #body_style {
      background: #fffffe;
      min-height: 1000px;
  }
  
  table td {
      border-collapse: collapse;
      border-spacing: 0 !important
  }
  
  table tr {
      border-collapse: collapse;
      border-spacing: 0 !important
  }
  
  table tbody {
      border-collapse: collapse;
      border-spacing: 0 !important
  }
  
  table {
      border-collapse: collapse;
      border-spacing: 0 !important
  }
  
  span.yshortcuts,
  a span.yshortcuts {
      color: #000001;
      background-color: none;
      border: none;
  }
  
  span.yshortcuts:hover,
  span.yshortcuts:active,
  span.yshortcuts:focus {
      color: #000001;
      background-color: none;
      border: none;
  }
  
  img {
      -ms-interpolation-mode: bicubic;
  }
  
  a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
  }
  
  a {
      color: #777777 !important;
      text-decoration: none !important;
  }
  
  @media only screen and (max-width: 480px) and (-webkit-min-device-pixel-ratio: 1) {
      .stack {
          width: 100% !important;
      }
      .hund {
          width: 100% !important;
          height: auto !important
      }
      .ninety {
          width: 90% !important;
          height: auto !important
      }
      .seventy {
          width: 70% !important;
          height: auto !important
      }
      .mo {
          width: 259px !important;
          height: auto !important
      }
      .noMo {
          display: none !important
      }
      .block {
          display: block !important
      }
      .left {
          float: left !important;
          text-align: left !important
      }
      .right {
          float: right !important;
          text-align: right !important
      }
      .center {
          text-align: center !important;
          margin: 0 auto !important
      }
      .noPad {
          padding: 0 !important
      }
      .rePad {
          padding: 5px !important
      }
      .padB {
          padding-bottom: 5px !important
      }
      .padT {
          padding-top: 5px !important
      }
      .padTwo {
          padding-top: 10px !important
      }
      .padV {
          padding: 25px 0 !important
      }
      .noBorder {
          border: none !important
      }
      .twoFive {
          font-size: 25px !important
      }
      .oneTwo {
          font-size: 12px !important;
      }
      .moLine {
          line-height: 28px !important;
      }
      .moLine2 {
          line-height: 15px !important;
      }
      .stack {
          width: 100% !important;
          display: block !important;
          height: auto !important;
          text-align: center !important;
      }
      .logos {
          width: 100% !important;
          display: block !important;
          padding-bottom: 20px !important;
      }
</style>
</head>

<body style="background: #fffffe; min-height: 1000px;" bgcolor="#fffffe">
<div align="center" id="body_style" style="padding:15px" class="rePad">
  <table class="hund" cellpadding="0" cellspacing="0" border="0" width="624" align="center">
    <tbody>
      <tr bgcolor="#fffffe">
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td align="center" style="padding-top: 15px; padding-bottom: 15px;">
                  <table width="98%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table class="stack" align="left" width="60%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td class="center" align="left" style="font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; color:#777777; font-size:11px; line-height: 14px; mso-line-height-rule: exactly;" width="60%"><a href="https://www.eiqgathering.com/eiq-2017-recap" style="color:#777777; text-decoration:none;" target="_blank"><span style="color:#777777; text-decoration:none">We hope you had a great time at EiQ!</span></a></td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="noMo" width="40%" align="right" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="right" style="font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; color:#777777; font-size:11px; line-height: 13px; mso-line-height-rule: exactly;">To view this as a web page, <a href="#" style="color:#777777; text-decoration:underline !important;"
                                    target="_blank"><span style="color:#777777; text-decoration: underline !important;">click here.</span></a></td>
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
        </td>
      </tr>
      <!------------START OF BODY------------>
      <tr>
        <td>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="624" align="left" valign="top">
                  <a href="https://www.eiqgathering.com/" target="_blank">
                    <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/041817_BWM_EiQ_Post-EiQ_Attendees_02.jpg" alt="EiQ | The intelligent email gathering - Thursday, March 30, 2017 Atlanta, GA | Hosted By BrightWave" title="EiQ | The intelligent email gathering - Thursday, March 30, 2017 Atlanta, GA | Hosted By BrightWave"
                      class="hund" style="display:block; max-width:624px;" border="0" height="157" width="624">
                  </a>
                </td>
              </tr>
              <tr>
                <td width="624" align="left" valign="top">
                  <a href="https://www.eiqgathering.com/eiq-2017-recap" target="_blank">
                    <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/041817_BWM_EiQ_Post-EiQ_Attendees03_03.jpg" alt="Thank You" title="Thank You" class="hund" style="display:block; max-width:624px;" border="0" height="274" width="624">
                  </a>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top" style="padding: 20px 45px 20px 45px;" bgcolor="#380c38">
                  <table class="ninety" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="left" style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: #ffffff; line-height: 22px; mso-line-height-rule:exactly;">On behalf of the entire EiQ/BrightWave team, I wanted to say thank you for attending the inaugural EiQ on March 30 in Atlanta. We really hope you enjoyed the event and that you felt like it was a worthwhile investment of your
                          time, energy and money.
                          <br>
                          <br>We aimed to deliver the best day in email and feel like we achieved that on many fronts. I can tell you 2018's EiQ will be even better.
                          <br>
                          <br>You can find <a href="https://www.eiqgathering.com/eiq-2017-recap" target="_blank" style="color:#e74279; text-decoration:none;"><span style="color:#e74279; text-decoration:none;">resources and recaps here,</span></a> including
                          photos from the day, the sketch illustrations of each sessions, related blog content (including 6 Important Learnings from our First EiQ Event That Transcend Business) and even the EiQ playlist.
                          <br>
                          <br>Be sure to <a href="https://www.eiqgathering.com/eiq-2017-recap" target="_blank" style="color:#e74279; text-decoration:none;"><span style="color:#e74279; text-decoration:none;">sign up</span></a> on the EiQ site so you
                          can be the first to know about 2018's EiQ.
                          <br>
                          <br>If I can provide help on any front, whether you are interested in learning more about BrightWave, or you just want to talk shop, do not hesitate to let me know.
                          <br>
                          <br>Thanks again for making EiQ a success!</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td bgcolor="#380c38" align="left" style="padding-bottom:80px">
                  <table class="ninety" width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td bgcolor="#380c38" width="32%" align="left">
                          <table border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="left" style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: #ffffff; line-height: 22px; mso-line-height-rule:exactly; padding-left:45px;">Regards,</td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" style="padding-top:15px; padding-left:35px;">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/041817_BWM_EiQ_Post-EiQ_Attendees_09.jpg" alt="Simms Jenkins" title="Simms Jenkins" class="hund" style="display:block; max-width:102px;" border="0" height="28" width="102">
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; color: #ffffff; line-height: 18px; mso-line-height-rule:exactly; padding-left:45px; padding-top:10px;">Simms Jenkins
                                  <br>Founder &amp; CEO</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td align="left" valign="middle">
                          <a href="https://www.brightwave.com" target="_blank">
                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/041817_BWM_EiQ_Post-EiQ_Attendees_06.jpg" alt="Simms Jenkins" title="Simms Jenkins" class="hund" style="display:block; max-width:107px;" border="0" height="113" width="107">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td width="100%" align="left" valign="top">
                  <a href="https://www.eiqgathering.com/eiq-2017-recap" target="_blank">
                    <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/041817_BWM_EiQ_Post-EiQ_Attendees_13.jpg" alt="View EiQ Recap" title="View EiQ Recap" class="hund" style="display:block; max-width:624px;" border="0" height="206" width="624">
                  </a>
                </td>
              </tr>
              <!--FOOTER START HERE-->
              <tr>
                <td align="center" valign="top" bgcolor="#e1e1e1">
                  <table width="624" border="0" cellspacing="0" cellpadding="0" style="width:624px;" class="em_wrapper">
                    <tbody>
                      <tr>
                        <td width="24" style="width:25px;" class="em_spacer">
                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                        </td>
                        <td align="center" valign="top">
                          <table width="576" border="0" cellspacing="0" cellpadding="0" style="width:576px;" class="em_wrapper">
                            <tbody>
                              <tr>
                                <td height="30" style="font-size:1px; line-height:1px; height:30px;">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_Presented_by.jpg" alt="Presented by" title="Presented by" style="font-family:Arial, sans-serif; font-size:23px; line-height:23px; color:#000000; display:block;" border="0"
                                    height="24" width="136">
                                </td>
                              </tr>
                              <tr>
                                <td height="17" style="height:17px;font-size:1px;line-height:1px;" class="em_spc_12">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <a href="http://www.adobe.com/" style="text-decoration:none;" target="_blank">
                                    <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_adobe.jpg" alt="Adobe" title="Adobe" style="font-family:Arial, sans-serif; font-size:16px; line-height:18px; color:#000000; display:block; max-width:40px;" border="0" height="55"
                                      width="40">
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td height="17" style="font-size:1px; line-height:1px; height:17px;" class="em_height20">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <table width="576" border="0" cellspacing="0" cellpadding="0" style="width:576px;" class="em_wrapper">
                                    <tbody>
                                      <tr>
                                        <td align="center" valign="top">
                                          <table width="282" border="0" cellspacing="0" cellpadding="0" style="width:282px;" class="em_wrapper" align="left">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top">
                                                  <table width="254" border="0" cellspacing="0" cellpadding="0" style="width:254px;" align="center">
                                                    <tbody>
                                                      <tr>
                                                        <td width="116" style="width:116px;height:37px;" height="37" class="em_heightauto" align="center" valign="middle">
                                                          <a href="http://www.fluentco.com/" style="text-decoration:none;" target="_blank">
                                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_fluent.jpg" alt="FLUENT" title="FLUENT" style="font-family:Arial, sans-serif; font-size:16px; line-height:18px; color:#000000; display:block; max-width:116px;" border="0"
                                                              height="25" width="116">
                                                          </a>
                                                        </td>
                                                        <td width="27" style="width:27px;">
                                                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                                        </td>
                                                        <td width="111" style="width:111px;height:37px;" height="37" class="em_heightauto" align="center" valign="middle">
                                                          <a href="http://www.briteverify.com/" style="text-decoration:none;" target="_blank">
                                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_briteverify.jpg" alt="BriteVerify" title="BriteVerify" style="font-family:Arial, sans-serif; font-size:16px; line-height:18px; color:#2d414c; display:block; max-width:111px;"
                                                              border="0" height="28" width="111">
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                                <td width="24" style="width:24px;" class="em_hide">
                                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if gte mso 9]>
                                        </td>
                                        <td valign="top">
                                           <![endif]-->
                                          <table width="291" border="0" cellspacing="0" cellpadding="0" style="width:291px;" class="em_wrapper" align="right">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" class="em_pad40">
                                                  <table width="291" border="0" cellspacing="0" cellpadding="0" style="width:291px;" align="center">
                                                    <tbody>
                                                      <tr>
                                                        <td width="127" style="width:127px;height:37px;" height="37" class="em_heightauto" align="center" valign="middle">
                                                          <a href="https://movableink.com/" style="text-decoration:none;" target="_blank">
                                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_movable.jpg" alt="Movable Ink" title="Movable Ink" style="font-family:Arial, sans-serif; font-size:16px; line-height:18px; color:#222222; display:block; max-width:127px;"
                                                              border="0" height="37" width="127">
                                                          </a>
                                                        </td>
                                                        <td width="28" style="width:28px;">
                                                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                                        </td>
                                                        <td width="136" style="width:136px;height:37px;" height="37" class="em_heightauto" align="center" valign="middle">
                                                          <a href="https://returnpath.com/" style="text-decoration:none;" target="_blank">
                                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_return.jpg" alt="Return Path" title="Return Path" style="font-family:Arial, sans-serif; font-size:16px; line-height:18px; color:#d4323d; display:block; max-width:136px;"
                                                              border="0" height="32" width="136">
                                                          </a>
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
                                </td>
                              </tr>
                              <tr>
                                <td height="40" style="height:40px;">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_partnerorganization.jpg" alt="Partner Organizations" title="Partner Organizations" style="font-family:Arial, sans-serif; font-size:23px; line-height:23px; color:#000000; display:block;"
                                    border="0" height="24" width="232">
                                </td>
                              </tr>
                              <tr>
                                <td height="11" style="font-size:1px; line-height:1px; height:11px;">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                              <tr>
                                <td align="center" valign="top">
                                  <table width="251" border="0" cellspacing="0" cellpadding="0" style="width:251px;" align="center">
                                    <tbody>
                                      <tr>
                                        <td align="center" valign="middle">
                                          <a href="https://womenofemail.org/" style="text-decoration:none;" target="_blank">
                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_w0e.jpg" alt="Women of Email" title="Women of Email" style="font-family:Arial, sans-serif; font-size:12px; line-height:16px; color:#000000; display:block; max-width:53px;"
                                              border="0" height="58" width="53">
                                          </a>
                                        </td>
                                        <td width="18" style="width:18px;">
                                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                        </td>
                                        <td align="center" valign="middle">
                                          <a href="http://www.atlantaima.org/" style="text-decoration:none;" target="_blank">
                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_aima.jpg" alt="AIMA" title="AIMA" style="font-family:Arial, sans-serif; font-size:12px; line-height:16px; color:#000000; display:block; max-width:89px;" border="0" height="35"
                                              width="89">
                                          </a>
                                        </td>
                                        <td width="24" style="width:24px;">
                                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                        </td>
                                        <td align="center" valign="middle">
                                          <a href="http://www.marketerquarterly.com/" style="text-decoration:none;" target="_blank">
                                            <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_mq.jpg" alt="THE MARKETER QUARTERLY" title="THE MARKETER QUARTERLY" style="font-family:Arial, sans-serif; font-size:12px; line-height:16px; color:#000000; display:block; max-width:67px;"
                                              border="0" height="51" width="67">
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td height="20" style="font-size:1px; line-height:1px; height:20px;">
                                  <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td width="24" style="width:25px;" class="em_spacer">
                          <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/030717_BWM_EiQBestDay_spacer.gif" width="1" height="1" alt="" style="display:block;" border="0">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 25px; padding-bottom: 10px;">
                  <table width="90%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="center" style="font-family: Helvetica, Arial, sans-serif; font-size: 11px; color: #777777; line-height: 16px; mso-line-height-rule:exactly;"><a href="#" style="color:#777777; text-decoration:underline;"
                            target="_blank"><span style="color:#777777; text-decoration:underline"><b>Unsubscribe</b></span></a>&nbsp; | &nbsp;<a href="#"
                            style="color:#777777; text-decoration:underline;" target="_blank"><span style="color:#777777; text-decoration:underline"><b>View Web Version</b></span></a>
                          <br>
                          <br> BrightWave is North America's leading email marketing agency. The award-winning firm specializes in elevating email marketing that drives revenue, cuts costs and builds relationships. Headquartered in Atlanta, GA, BrightWave
                          works with a blue chip client roster, including Aflac, Chick-fil-A, Equifax, Mattress Firm and Phillips 66. For more information, please visit <a href="http://www.brightwave.com/" style="color:#777777; text-decoration:none;"
                            target="_blank"><span style="color:#777777; text-decoration:none">BrightWave.com</span></a>
                          <br>
                          <br> You are receiving this email as a part of your BrightWave Report subscription or because of your relationship with BrightWave as a past event attendee, client, partner or friend of the company. You can opt out of these
                          messages at any time.
                          <br>
                          <br> To be sure that you always receive The BrightWave Report, add the e-mail address <a href="mailto:email@bwmta.com" style="color:#777777; text-decoration:none;" target="_blank"><span style="color:#777777; text-decoration:none">email@bwmta.com</span></a>                            to your address book or personal whitelist.
                          <br>
                          <br> BrightWave
                          <br> 67 Peachtree Park Drive, Suite 200 Atlanta, GA, 30309, United States</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr align="center">
                <td align="center">
                  <a href="http://www.brightwave.com/" target="_blank">
                    <img src="http://image.bwmta.com/lib/fe9815707566017473/m/8/113016_BWM_EiQAnnounce_17.jpg" alt="BRIGHTWAVE" class="hund" style="display:block; max-width:235px;" border="0" height="56" width="235">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>


</body>`;
