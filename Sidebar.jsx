import React, { useState } from 'react';
import {
    FaSchool,
    FaCodeBranch,
    FaDollarSign,
    FaUserTie,
    FaAddressBook,
    FaTicketAlt,
    FaGraduationCap,
    FaCreditCard,
    FaUsers,
    FaBell,
    FaChartBar,
    FaCog,
    FaHistory,
    FaBars
} from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { icon: <FaChartBar className={styles.icon} />, text: 'Dashboard' },
        { icon: <FaSchool className={styles.icon} />, text: 'School Management' },
        { icon: <FaCodeBranch className={styles.icon} />, text: 'Branch Management' },
        { icon: <FaDollarSign className={styles.icon} />, text: 'Pricing & Plan' },
        { icon: <FaUserTie className={styles.icon} />, text: 'Salesman Management' },
        { icon: <FaAddressBook className={styles.icon} />, text: 'Leads Management' },
        { icon: <FaTicketAlt className={styles.icon} />, text: 'Support & Tickets' },
        { icon: <FaGraduationCap className={styles.icon} />, text: 'Training & Onboarding' },
        { icon: <FaCreditCard className={styles.icon} />, text: 'Payment & Billing' },
        { icon: <FaUsers className={styles.icon} />, text: 'HR Panel' },
        { icon: <FaBell className={styles.icon} />, text: 'Notification' },
        { icon: <FaChartBar className={styles.icon} />, text: 'Reports' },
        { icon: <FaCog className={styles.icon} />, text: 'Settings' },
        { icon: <FaHistory className={styles.icon} />, text: 'Activity Logs' },
    ];

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.sidebarCollapsed : ''}`}>
            <div className={styles.sidebarHeader}>
                <button
                    className={styles.toggleButton}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <FaBars />
                </button>
                {!isCollapsed && 'Multiforgex'}
            </div>

            <ul className={styles.navItems}>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.navItem}>
                        {item.icon}
                        {!isCollapsed && <span className={styles.navText}>{item.text}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
