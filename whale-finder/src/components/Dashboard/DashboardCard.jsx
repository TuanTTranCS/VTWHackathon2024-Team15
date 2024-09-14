import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function DashboardCard(props) {
    return (
        <div className="dashboard-card">
            <Card>
                <CardContent>
                    <p>{props.description}</p>
                </CardContent>
                <Button variant="outline">{props.buttonText}</Button>
            </Card>
        </div>
    );
}