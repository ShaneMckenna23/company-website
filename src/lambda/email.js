const CONTACT_ADDRESS = 'shanemckennadev@gmail.com';
const querystring = require('querystring');
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
  })
);

exports.handler = (event, context, callback) => {
  const body = querystring.parse(event.body);
  mailer.sendMail(
    {
      from: process.env.GMAIL_ADDRESS,
      to: [body.to],
      subject: body.subject || 'Thank You!',
      html: body.message || saleEmail,
    },
    (err, info) => {
      if (err) return callback(err);
      callback(null, { statusCode: 200, body: 'Success!' });
    }
  );
};

let saleEmail = `<!DOCTYPE html>
<html>
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<title></title>
	<style type="text/css">
	   @media yahoo{.kmHide,.kmMobileOnly,.kmMobileHeaderStackDesktopNone,.kmMobileWrapHeaderDesktopNone{display:none;font-size:0 !important;line-height:0 !important;mso-hide:all !important;max-height:0 !important;max-width:0 !important;width:0 !important}}@media only screen and (max-width:480px){body,table,td,p,a,li,blockquote{-webkit-text-size-adjust:none !important}body{width:100% !important;min-width:100% !important}td[id=bodyCell]{padding:12px !important}table.kmMobileHide{display:none !important}table.kmDesktopOnly,td.kmDesktopOnly,th.kmDesktopOnly,tr.kmDesktopOnly,td.kmDesktopWrapHeaderMobileNone{display:none !important}table.kmMobileOnly{display:table !important}tr.kmMobileOnly{display:table-row !important}td.kmMobileOnly,td.kmDesktopWrapHeader,th.kmMobileOnly{display:table-cell !important}tr.kmMobileNoAlign,table.kmMobileNoAlign{float:none !important;text-align:initial !important;vertical-align:middle !important;table-layout:fixed !important}tr.kmMobileCenterAlign{float:none !important;text-align:center !important;vertical-align:middle !important;table-layout:fixed !important}td.kmButtonCollection{padding-left:9px !important;padding-right:9px !important;padding-top:9px !important;padding-bottom:9px !important}td.kmMobileHeaderStackDesktopNone,img.kmMobileHeaderStackDesktopNone,td.kmMobileHeaderStack{display:block !important;margin-left:auto !important;margin-right:auto !important;padding-bottom:9px !important;padding-right:0 !important;padding-left:0 !important}td.kmMobileWrapHeader,td.kmMobileWrapHeaderDesktopNone{display:inline-block !important}td.kmMobileHeaderSpacing{padding-right:10px !important}td.kmMobileHeaderNoSpacing{padding-right:0 !important}table.kmDesktopAutoWidth{width:inherit !important}table.kmMobileAutoWidth{width:100% !important}table[class=kmTextContentContainer]{width:100% !important}table[class=kmBoxedTextContentContainer]{width:100% !important}td[class=kmImageContent]{padding-left:0 !important;padding-right:0 !important}img[class=kmImage],img.kmImage{width:100% !important}td.kmMobileStretch{padding-left:0 !important;padding-right:0 !important}table[class=kmSplitContentLeftContentContainer],table.kmSplitContentLeftContentContainer,table[class=kmSplitContentRightContentContainer],table.kmSplitContentRightContentContainer,table[class=kmColumnContainer],td[class=kmVerticalButtonBarContentOuter] table[class=kmButtonBarContent],td[class=kmVerticalButtonCollectionContentOuter] table[class=kmButtonCollectionContent],table[class=kmVerticalButton],table[class=kmVerticalButtonContent]{width:100% !important}td[class=kmButtonCollectionInner]{padding-left:9px !important;padding-right:9px !important;padding-top:9px !important;padding-bottom:0 !important}td[class=kmVerticalButtonIconContent],td[class=kmVerticalButtonTextContent],td[class=kmVerticalButtonContentOuter]{padding-left:0 !important;padding-right:0 !important;padding-bottom:9px !important}table[class=kmSplitContentLeftContentContainer] td[class=kmTextContent],table[class=kmSplitContentRightContentContainer] td[class=kmTextContent],table[class=kmColumnContainer] td[class=kmTextContent],table[class=kmSplitContentLeftContentContainer] td[class=kmImageContent],table[class=kmSplitContentRightContentContainer] td[class=kmImageContent],table.kmSplitContentLeftContentContainer td.kmImageContent,table.kmSplitContentRightContentContainer td.kmImageContent{padding-top:9px !important}td[class="rowContainer kmFloatLeft"],td.rowContainer.kmFloatLeft,td[class="rowContainer kmFloatLeft firstColumn"],td.rowContainer.kmFloatLeft.firstColumn,td[class="rowContainer kmFloatLeft lastColumn"],td.rowContainer.kmFloatLeft.lastColumn{float:left;clear:both;width:100% !important}table[class=templateContainer],table[class="templateContainer brandingContainer"],div[class=templateContainer],div[class="templateContainer brandingContainer"],table[class=templateRow]{max-width:600px !important;width:100% !important}td[class=templateContainerInner]{padding:0 !important}h1{font-size:30px !important;line-height:100%px !important}h2{font-size:22px !important;line-height:100%px !important}h3{font-size:16px !important;line-height:100%px !important}h4{font-size:14px !important;line-height:100%px !important}td[class=kmTextContent]{font-size:14px !important;line-height:130% !important}td[class=kmTextBlockInner] td[class=kmTextContent]{padding-right:18px !important;padding-left:18px !important}table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner]{padding-left:9px !important;padding-right:9px !important}table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner] [class=kmTextContent]{font-size:14px !important;line-height:130% !important;padding-left:4px !important;padding-right:4px !important}td[class=kmTextBlockInner] td[class=kmTextContent],td[class=kmImageBlockInner],td[class=kmSplitBlockInner],td[class=kmButtonBlockInner],td[class=kmButtonBarInner],td[class=kmDividerBlockInner],table[class="kmTableBlock kmTableMobile"] td[class=kmTableBlockInner]{padding-left:20px !important;padding-right:20px !important}}
	</style>
	<style type="text/css">
	                                                       @import url("https://fonts.googleapis.com/css?family=Raleway:400|Sanchez:400,400italic|Lato:900");
	</style>
</head>
<body style='margin:0;padding:0;font-family:"Raleway", Helvetica, sans-serif;font-weight:400;letter-spacing:0.75px;line-height:180%;background-color:#528fe7'>
	<center>
		<table align="center" border="0" cellpadding="0" cellspacing="0" data-upload-file-url="/ajax/email-editor/file/upload" data-upload-files-url="/ajax/email-editor/files/upload" id="bodyTable" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;background-color:#528fe7;height:100%;margin:0;width:100%" width="100%">
			<tbody>
				<tr>
					<td align="center" id="bodyCell" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding-top:10px;padding-left:20px;padding-bottom:20px;padding-right:20px;border-top:0;height:100%;margin:0;width:100%" valign="top">
						<div class="templateContainer" style="border:0 none #AAA;background-color:#528fe7;border-radius:0;display: table; width:600px">
							<div class="templateContainerInner" style="padding:0">
								<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
									<tr>
										<td align="center" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" valign="top">
											<table border="0" cellpadding="0" cellspacing="0" class="templateRow" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
												<tbody>
													<tr>
														<td class="rowContainer kmFloatLeft" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" valign="top">
															<table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock kmDesktopOnly" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																<tbody class="kmImageBlockOuter">
																	<tr>
																		<td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;padding-top:20px;padding-right:0px;padding-left:0px;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																				<tbody>
																					<tr>
																						<td class="kmImageContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;font-size:0;padding:0;text-align: center;" valign="top"><img align="center" alt="S22 Studio" class="kmImage" src="https://www.s22.studio/favicons/android-chrome-192x192.png" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;max-width:1200px;padding:0;border-width:0;" width="86"></td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															<table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																<tbody class="kmImageBlockOuter">
																	<tr>
																		<td class="kmImageBlockInner kmMobileStretch" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;padding-top:20px;background-color:#528fe7;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																				<tbody>
																					<tr>
																						<td class="kmImageContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;font-size:0;padding:0;text-align: center;" valign="top"><img align="center" alt="Rocket Start" class="kmImage" src="https://www.s22.studio/rocket.gif" style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:top;font-size:12px;max-width:600px;background-color:#528fe7;" width="600"></td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															<table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																<tbody class="kmTextBlockOuter">
																	<tr>
																		<td class="kmTextBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																				<tbody>
																					<tr>
																						<td class="kmTextContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#191919;font-family:Helvetica, Arial;font-size:13px;line-height:200%;letter-spacing:normal;text-align:left;color:#EEEDEA;padding-bottom:0px;padding-right:0px;padding-left:0px;padding-top:60px;background-color:#FFFFFF;" valign="top"></td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															<table border="0" cellpadding="0" cellspacing="0" class="kmImageBlock kmDesktopOnly" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																<tbody class="kmImageBlockOuter">
																	<tr>
																		<td class="kmImageBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0px;padding-top:10px;background-color:#FFFFFF;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmImageContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;min-width:100%" width="100%">
																				<tbody>
																					<tr>
																						<td style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;padding:0;font-size:0;padding:0;text-align: center;" valign="top">
																							<h1 style="border:0;height:auto;line-height:100%;outline:none;text-decoration:none;padding-bottom:0;display:inline;vertical-align:top;font-size:28px;max-width:1200px;">S22 Studio</h1>
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
										<td align="center" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" valign="top">
											<table border="0" cellpadding="0" cellspacing="0" class="templateRow" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
												<tbody>
													<tr>
														<td class="rowContainer kmFloatLeft" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" valign="top">
															<table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																<tbody class="kmTextBlockOuter">
																	<tr>
																		<td class="kmTextBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#FFFFFF;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																				<tbody>
																					<tr>
																						<td class="kmTextContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#191919;font-family:Helvetica, Arial;font-size:13px;line-height:200%;letter-spacing:normal;text-align:left;padding-top:40px;padding-bottom:80px;padding-left:80px;padding-right:80px;" valign="top">
																							<p style='margin:0;padding-bottom:1em;font-family:"Raleway", Helvetica, sans-serif;font-weight:400;letter-spacing:0.75px;line-height:180%'>Thank you for getting in touch! We appreciate your interest in working with us.<br>
																							<br>
																							One of our colleagues will get back to you shortly. Have a great day!</p>
																							<p style='margin:0;padding-bottom:1em;font-family:"Raleway", Helvetica, sans-serif;font-weight:400;letter-spacing:0.75px;line-height:180%'>- S22 Studio</p>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															<table border="0" cellpadding="0" cellspacing="0" class="kmTextBlock" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																<tbody class="kmTextBlockOuter">
																	<tr>
																		<td class="kmTextBlockInner" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#528fe7;" valign="top">
																			<table align="left" border="0" cellpadding="0" cellspacing="0" class="kmTextContentContainer" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0" width="100%">
																				<tbody>
																					<tr>
																						<td class="kmTextContent" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;color:#191919;font-family:Helvetica, Arial;font-size:13px;line-height:200%;letter-spacing:normal;text-align:left;padding-top:30px;padding-bottom:0px;background-color:#528fe7;padding-left:18px;padding-right:18px;" valign="top">
																							<p style='margin:0;padding-bottom:1em;font-family:"Raleway", Helvetica, sans-serif;font-weight:400;letter-spacing:0.75px;line-height:180%;text-align: center;'><span style="color:#ffffff;"><span style="font-size:10px;"><span style="line-height: 20.8px;">San Diego, CA</span></span></span></p>
																							<p style='margin:0;padding-bottom:0;font-family:"Raleway", Helvetica, sans-serif;font-weight:400;letter-spacing:0.75px;line-height:180%;text-align: center;'><span style="color:#ffffff;"><span style="font-size:10px;"><em><span style="line-height: 20.8px; text-align: center;"><a class="unsubscribe-link" href="https://www.s22.studio/" style="color:#ffffff;font-weight:bold;text-decoration:none;">Website</a></span></em></span></span></p>
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
								</table>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</center>
</body>
</html>`;
