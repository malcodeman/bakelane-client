import nanoid from "nanoid";

export const SETTINGS = [
  {
    id: nanoid(),
    label: "Account",
    url: "/settings/account"
  },
  {
    id: nanoid(),
    label: "Privacy",
    url: "/settings/privacy"
  },
  {
    id: nanoid(),
    label: "Notifications",
    url: "/settings/notifications"
  },
  {
    id: nanoid(),
    label: "Accessibility",
    url: "/settings/accessibility"
  }
];

export const ACCOUNT = [
  {
    id: nanoid(),
    label: "Username",
    url: "/settings/username"
  },
  {
    id: nanoid(),
    label: "Phone",
    url: "/settings/phone"
  },
  {
    id: nanoid(),
    label: "Email",
    url: "/settings/email"
  },
  {
    id: nanoid(),
    label: "Password",
    url: "/settings/password"
  }
];

export const NOTIFICATIONS = [
  {
    id: nanoid(),
    label: "Push notifications",
    url: "/settings/push_notifications"
  },
  {
    id: nanoid(),
    label: "SMS notifications",
    url: "/settings/sms_notifications"
  },
  {
    id: nanoid(),
    label: "Email notifications",
    url: "/settings/email_notifications"
  }
];

export default {
  SETTINGS,
  ACCOUNT,
  NOTIFICATIONS
};
