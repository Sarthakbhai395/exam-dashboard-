import React from 'react';
import { motion } from 'framer-motion';
import { Link, Routes, Route } from 'react-router-dom';

const settingsOptions = [
  { title: 'Profile Settings', description: 'Update your name, email, and profile picture.', path: '/profile' },
  { title: 'Account Security', description: 'Change your password and manage security settings.', path: '/security' },
  { title: 'Notifications', description: 'Manage email and push notifications.', path: '/notifications' },
  { title: 'Privacy', description: 'Control who can see your activity and personal details.', path: '/privacy' },
  { title: 'Theme & Appearance', description: 'Switch between light and dark modes.', path: '/theme' },
  { title: 'Subscription', description: 'Manage your subscription and payment methods.', path: '/subscription' },
  { title: 'Help & Support', description: 'Get assistance with common issues and contact support.', path: '/support' },
];

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
    >
      <motion.h1
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Settings
      </motion.h1>
      <motion.div className="space-y-4">
        {settingsOptions.map((option, index) => (
          <Link to={option.path} key={index}>
            <motion.div
              className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-lg font-semibold">{option.title}</h2>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ProfileSettings = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
    <p>Update your name, email, and profile picture here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const AccountSecurity = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Account Security</h1>
    <p>Change your password and manage security settings here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const Notifications = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Notifications</h1>
    <p>Manage email and push notifications here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const Privacy = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Privacy</h1>
    <p>Control who can see your activity and personal details here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const ThemeAppearance = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Theme & Appearance</h1>
    <p>Switch between light and dark modes here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const Subscription = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Subscription</h1>
    <p>Manage your subscription and payment methods here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

const HelpSupport = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg min-h-screen"
  >
    <h1 className="text-2xl font-bold mb-4">Help & Support</h1>
    <p>Get assistance with common issues and contact support here.</p>
    <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Settings</Link>
  </motion.div>
);

export const SettingsRoutes = () => (
  <Routes>
    <Route path="/" element={<Settings />} />
    <Route path="/profile" element={<ProfileSettings />} />
    <Route path="/security" element={<AccountSecurity />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/theme" element={<ThemeAppearance />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/support" element={<HelpSupport />} />
  </Routes>
);

export default Settings;