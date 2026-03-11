export const contactAutoReplyTemplate = ({
  firstName,
  email,
  prototypeUrl,
  privacyUrl,
  termsUrl,
  unsubscribeUrl,
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thanks for reaching out — SafeAI</title>
</head>

<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

<!-- HEADER -->
<tr>
<td style="background:linear-gradient(to right,#10B981,#06B6D4);
border-radius:16px 16px 0 0;padding:28px 40px;">

<table cellpadding="0" cellspacing="0">
<tr>

<!-- LOGO -->
<td style="vertical-align:middle;padding-right:12px;">
<img
  src="https://safeai-tech.com/logo.png"
  alt="SafeAI"
  width="40"
  height="40"
  style="display:block;border:0;outline:none;text-decoration:none;"
/>
</td>

<!-- BRAND NAME -->
<td style="vertical-align:middle;">
<span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">
SafeAI
</span>
</td>

</tr>
</table>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="background:#ffffff;padding:40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

<p style="font-size:18px;color:#1e293b;font-weight:600;margin:0 0 8px;">
Hi ${firstName || "there"},
</p>

<p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 32px;">
Thank you for contacting SafeAI! We've received your message and our team will review it shortly.
</p>

<div style="height:1px;background:#f1f5f9;margin-bottom:32px;"></div>

<p style="font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 20px;">
What happens next
</p>

<p style="font-size:14px;color:#1e293b;"><strong>1.</strong> We review your message</p>
<p style="font-size:13px;color:#64748b;">Our team prepares a tailored response.</p>

<p style="font-size:14px;color:#1e293b;"><strong>2.</strong> We reply within 24h</p>
<p style="font-size:13px;color:#64748b;">
Expect a reply at <strong>${email}</strong>.
</p>

<p style="font-size:14px;color:#1e293b;"><strong>3.</strong> Try the prototype now</p>
<p style="font-size:13px;color:#64748b;">
Test SafeAI while we prepare your demo.
</p>

<div style="text-align:center;margin:32px 0;">
<a href="${prototypeUrl}"
style="display:inline-block;background:linear-gradient(to right,#10B981,#06B6D4);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:10px;font-size:14px;font-weight:700;">
Try SafeAI Now →
</a>
</div>

<p style="font-size:13px;color:#94a3b8;text-align:center;">
Urgent? Reply directly or email
<a href="mailto:contact@safeai-tech.com"
style="color:#10b981;text-decoration:none;font-weight:600;">
contact@safeai-tech.com
</a>
</p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;">

<p style="text-align:center;font-size:11px;">
<a href="${privacyUrl}">Privacy Policy</a> |
<a href="${termsUrl}">Terms</a> |
<a href="${unsubscribeUrl}">Unsubscribe</a>
</p>

<p style="font-size:11px;color:#94a3b8;text-align:center;">
IJATECH · 60 rue de l'Aigle, 92250 La Garenne-Colombes, France
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};