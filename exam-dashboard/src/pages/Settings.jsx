import React from 'react';
import { motion } from 'framer-motion';

const settingsOptions = [
  { title: 'Profile Settings', description: 'Update your name, email, and profile picture.' },
  { title: 'Account Security', description: 'Change your password and manage security settings.' },
  { title: 'Notifications', description: 'Manage email and push notifications.' },
  { title: 'Privacy', description: 'Control who can see your activity and personal details.' },
  { title: 'Theme & Appearance', description: 'Switch between light and dark modes.' },
  { title: 'Subscription', description: 'Manage your subscription and payment methods.' },
  { title: 'Help & Support', description: 'Get assistance with common issues and contact support.' },
];

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg"
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
          <motion.div
            key={index}
            className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-lg font-semibold">{option.title}</h2>
            <p className="text-gray-600">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Settings;
