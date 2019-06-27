export const kidEmail = (username, domainEmail) => {
  var maskedEmail = domainEmail.replace("@","--a--");
  var kidEmail = username+"@"+maskedEmail;
  console.log(kidEmail);
  return kidEmail.toLowerCase();
}
