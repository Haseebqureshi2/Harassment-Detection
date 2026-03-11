export const feedbackConfirmationTemplate = ({
  firstName,
  prototypeUrl,
  privacyUrl,
  termsUrl,
  unsubscribeUrl,
  data,
}) => {
const stars = (rating) => {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += i <= rating ? "⭐" : "☆";
  }
  return `${s} (${rating}/5)`;
};

return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;background:#f1f5f9;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">

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
<td style="padding:32px">

<p style="font-size:18px;color:#111827;margin:0 0 12px;">
Hi <strong>${firstName}</strong>,
</p>

<p style="font-size:14px;color:#374151;line-height:1.6;margin-bottom:24px;">
Thank you for testing SafeAI! ${
  data.includeAttachments
    ? "Thank you for testing SafeAI!. Your analysis report is ready"
    : "Thank you for taking the time to share your feedback on SafeAI!. Your input is invaluable as we continue to improve our harrasment detection technology"
}
</p>


<!-- ANALYSIS SUMMARY -->
<table width="100%" style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px">

<tr>
<td colspan="2" style="font-size:12px;color:#6b7280;font-weight:bold;padding-bottom:12px">
ANALYSIS SUMMARY
</td>
</tr>

<tr>

<td style="padding:8px">
<div style="font-size:11px;color:#6b7280">Risk Score</div>
<div style="font-size:22px;font-weight:bold;color:#ef4444">
${data.riskScore ?? "-"} / 10
</div>
</td>

<td style="padding:8px">
<div style="font-size:11px;color:#6b7280">Severity</div>
<div style="font-size:20px;font-weight:bold;color:#ef4444">
${data.severity ?? "-"}
</div>
</td>

</tr>

<tr>

<td style="padding:8px">
<div style="font-size:11px;color:#6b7280">Context</div>
<div style="font-weight:bold">
${data.context ?? "-"}
</div>
</td>

<td style="padding:8px">
<div style="font-size:11px;color:#6b7280">Findings</div>
<div style="font-weight:bold">
${data.findingsCount ?? 0} detected
</div>
</td>

</tr>

</table>

<!-- FEEDBACK -->
<table width="100%" style="background:#ecfdf5;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin-bottom:24px">

<tr>
<td style="font-size:12px;font-weight:bold;color:#047857;padding-bottom:12px">
YOUR FEEDBACK
</td>
</tr>

<tr>
<td style="padding:4px 0;font-size:13px">
Accuracy: ${stars(data.accuracyRating)}
</td>
</tr>

<tr>
<td style="padding:4px 0;font-size:13px">
Usefulness: ${stars(data.usefulnessRating)}
</td>
</tr>

<tr>
<td style="padding:4px 0;font-size:13px">
Recommend: ${stars(data.recommendRating)}
</td>
</tr>

${
data.feedbackComment
? `
<tr>
<td style="padding-top:10px;border-top:1px solid #bbf7d0;font-size:13px">
<strong>Your Comment:</strong><br/>
<span style="font-style:italic;color:#374151">
"${data.feedbackComment}"
</span>
</td>
</tr>
`
: ""
}

</table>
<!-- CTA -->
<div style="text-align:center;margin-bottom:32px;">
  <p style="font-size:13px;color:#94a3b8;margin:0 0 16px;">
  In the meantime, test SafeAI for free — no setup required
  </p>

  <a href="${prototypeUrl}"
  style="display:inline-block;background:linear-gradient(to right,#10B981,#06B6D4);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:10px;font-size:14px;font-weight:700;letter-spacing:0.02em;">
  Try SafeAI Now →
  </a>
</div>

<div style="height:1px;background:#f1f5f9;margin-bottom:24px;"></div>

<p style="font-size:13px;color:#94a3b8;text-align:center;margin:0;">
Urgent? Reply directly to this email or reach us at
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

<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
<tr>

<td style="vertical-align:middle;">
<strong style="font-size:13px;color:#475569;">SafeAI</strong>
</td>

<td style="text-align:right;vertical-align:middle;">
<a href="${privacyUrl}"
style="font-size:11px;color:#94a3b8;text-decoration:underline;margin-right:12px;">
Privacy Policy
</a>

<span style="font-size:11px;color:#cbd5e1;">|</span>

<a href="${termsUrl}"
style="font-size:11px;color:#94a3b8;text-decoration:underline;margin:0 12px;">
Terms of Service
</a>

<span style="font-size:11px;color:#cbd5e1;">|</span>

<a href="${unsubscribeUrl}"
style="font-size:11px;color:#94a3b8;text-decoration:underline;margin-left:12px;">
Unsubscribe
</a>

</td>

</tr>
</table>

<p style="font-size:11px;color:#94a3b8;margin:0 0 8px;text-align:center;">
IJATECH · 60 rue de l'Aigle, 92250 La Garenne-Colombes, France
</p>

<p style="font-size:11px;color:#cbd5e1;margin:0;text-align:center;line-height:1.7;">
Your uploaded file has been permanently deleted. We don't store any audio/video data.<br>
This email was sent because you contacted us via safeai-tech.com.
</p>

</td>
</tr>
</table>

</body>
</html>
`;
};