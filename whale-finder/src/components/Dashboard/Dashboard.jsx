import DashboardCard from './DashboardCard';
import React from 'react'
import './dashboard.css';

export default function Dashboard() {
    const CardDescription = ["There are 5000 profiles that match your needs!", "You have 4 saved profiles to take a look at!"];
    const cardButton = ["Discover profiles", "See who I've saved"];

    return (
        <div className="dashboard-container">
            <DashboardCard description={CardDescription[0]} buttonText={cardButton[0]} />
            <DashboardCard description={CardDescription[1]} buttonText={cardButton[1]} />
        </div>
    );
}