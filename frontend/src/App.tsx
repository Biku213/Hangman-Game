import React from "react";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Layout, Row, Col, Typography } from "antd";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import HangmanGame from "./components/HangmanGame";

const { Title } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)" }}>
      <Row justify="space-between" align="middle" style={{ padding: "20px" }}>
        <Col>
          <Title level={2} style={{ color: "#fff", margin: 0, fontFamily: "'Press Start 2P', cursive" }}>
            Hangman Game
          </Title>
        </Col>
        <Col>
          <WalletSelector />
        </Col>
      </Row>
      <HangmanGame />
    </Layout>
  );
}

export default App;