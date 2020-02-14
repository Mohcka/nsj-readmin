import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

export default () => (
  <Card>
    <CardHeader title="Admin Dashbaord" />
    <CardContent>
      <p>Lorem ipsum sic dolor amet...</p>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </CardContent>
  </Card>
);
