import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Card className="dashboard-card">
                <CardContent className="first-card-text">
                    <p>There are <strong>5000</strong> profiles that match your needs!</p>
                </CardContent>
                <Button variant="default" className="discover-btn">Discover profiles</Button>
            </Card>

            <Card className="dashboard-card">
                <CardContent className="second-card-text">
                    <p>You have <strong>4</strong> saved profiles to take a look at!</p>
                </CardContent>
                <Button variant="outline" className="save-btn">See who I've saved</Button>
            </Card>


        </div>
    );
}