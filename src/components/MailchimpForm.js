import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";
import '../CSS/Footer.css'

export const MailchimpForm = () => {
  const postURL = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${
    process.env.REACT_APP_MAILCHIMP_U
  }&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <MailchimpSubscribe                                                 
        url={postURL}
        render={({ subscribe, status, message }) => (
            <Newsletter 
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};
