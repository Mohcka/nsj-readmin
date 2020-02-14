import * as React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const Foo: React.FC = () => (
  <Card>
    <CardHeader title="Hello" />
    <CardContent>
      <Button variant="contained" color="secondary">
        Begin Automation
      </Button>
    </CardContent>
  </Card>
);

export default Foo;
