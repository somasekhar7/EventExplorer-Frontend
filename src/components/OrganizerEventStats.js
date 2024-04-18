import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js'; // Importing Chart.js with 'auto' to include all components
import { Container, Row, Col, Card, ListGroup, Button, Table } from 'react-bootstrap';
import axios from 'axios';

const OrganizerEventStats = () => {
    const sessionEmail = sessionStorage.getItem("email");

    const [events, setEvents] = useState([]);
    const [eventInformationData, setEventInformationData] = useState({
        labels: ['Tickets Sold', 'Tickets Remaining', 'Seating Capacity', 'Revenue Generated'],
        datasets: [{
            label: 'Event Information',
            data: [],
            backgroundColor: ['#007bff', '#ffc107', 'green', '#dc3545'],
            hoverOffset: 8,
        }]
    });
    const chartRef = useRef(null);

    const fetchEventData = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/ee/v1/event-statistics/${sessionEmail}`);
            setEvents(response.data);

            // Extracting data values from the API response
            const eventData = response.data.map(event => [
                parseInt(event.soldCapacity),
                parseInt(event.remainingCapacity),
                parseInt(event.eventCapacity),
                parseFloat(event.totalRevenue)
            ]);

            // Updating eventInformationData with the retrieved data values
            setEventInformationData(prevData => {
                return {
                    ...prevData,
                    datasets: [{
                        ...prevData.datasets[0],
                        data: eventData[0]
                    }]
                };
            });
        } catch (error) {
            console.error('Error fetching event data:', error);
        }
    };

    useEffect(() => {
        fetchEventData();
    }, []);

    const createChart = () => {
        if (chartRef.current && eventInformationData.datasets[0].data.length > 0) {
            new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: eventInformationData.labels,
                    datasets: eventInformationData.datasets,
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const label = eventInformationData.labels[context.dataIndex];
                                    const value = eventInformationData.datasets[0].data[context.dataIndex];
                                    return `${label}: ${value}`;
                                }
                            }
                        },
                        legend: {
                            position: 'bottom',
                        }
                    },
                    animation: {
                        animateRotate: true,
                        animateScale: true,
                        duration: 1000
                    }
                }
            });
        }
    };

    useEffect(() => {
        createChart();
    }, [eventInformationData]);

    return (
        <>
            <h2>Organizer Events</h2>
            <Container>
                <Row className="g-3 mb-3">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-body-emphasis text-nowrap">Event Information</h2>
                                <h5 className="text-body-tertiary mb-4">Details about the event</h5>
                                <ListGroup variant="flush">
                                    {eventInformationData.labels.map((label, index) => (
                                        <ListGroup.Item key={index}>
                                            <span className="d-inline-block bg-info-light bullet-item me-2"></span>
                                            <strong>{label}</strong>: {eventInformationData.datasets[0].data[index]}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                {/*<Button variant="outline-primary" className="mt-3">See Details</Button>*/}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <div className="position-relative mb-sm-4 mb-xl-0">
                            <canvas ref={chartRef} style={{ minHeight: '390px', width: '100%', border: '1px solid #ccc' }}></canvas>
                        </div>
                    </Col>
                </Row>
                <br />
                <div className="table-responsive">
                    <Table striped bordered hover className="table-rounded table-shadow">
                        <thead>
                        <tr>
                            <th className="text-center bg-primary text-white">Event Title</th>
                            <th className="text-center bg-primary text-white">Date</th>
                            <th className="text-center bg-primary text-white">Tickets Sold</th>
                            <th className="text-center bg-primary text-white">Seats Remaining</th>
                            <th className="text-center bg-primary text-white">Seating Capacity</th>
                            <th className="text-center bg-primary text-white">Revenue Generated</th>
                        </tr>
                        </thead>
                        <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td className="text-center">{event.eventName}</td>
                                <td className="text-center">{event.eventDate}</td>
                                <td className="text-center">{event.soldCapacity}</td>
                                <td className="text-center">{event.remainingCapacity}</td>
                                <td className="text-center">{event.eventCapacity}</td>
                                <td className="text-center">${event.totalRevenue}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
};

export default OrganizerEventStats;
