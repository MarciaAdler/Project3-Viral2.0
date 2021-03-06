import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/api";
import MarketChart from "./MarketChart";

function Markets() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    loadStocks();
  }, []);

  function loadStocks() {
    api
      .getStocks()
      .then(res => {
        console.log(res);
        setStocks(res.data);
      })

      .catch(err => console.log(err));
  }

  return (
    <div>
      <Container fluid>
        <Row className="py-md-5 border-bottom">
          <Col className="text-center py-md-5">
            <h2>Stock Market Impact</h2>
            {stocks.length ? (
              <MarketChart stocks={stocks} />
            ) : (
              "no stocks found"
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Markets;
