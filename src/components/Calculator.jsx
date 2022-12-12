import React from "react";
import "./Calculator.css";
import { Button } from "./Button";
import { Screen } from "./Screen";

export function Calculator() {
  return (
    <section className="calculator">
      <Screen />
      <div className="buttons-container">
        <Button className="button-element normal-bg-color" content={7}/>{/*1*/}
        <Button className="button-element normal-bg-color" content={8}/>{/*1*/}
        <Button className="button-element normal-bg-color" content={9}/>{/*1*/}
        <Button className="button-element delete-button" content={"DEL"}/>{/*1*/}
        <Button className="button-element normal-bg-color" content={4}/>{/*2*/}
        <Button className="button-element normal-bg-color" content={5}/>{/*2*/}
        <Button className="button-element normal-bg-color" content={6}/>{/*2*/}
        <Button className="button-element normal-bg-color" content={"+"}/>{/*2*/}
        <Button className="button-element normal-bg-color" content={1}/>{/*3*/}
        <Button className="button-element normal-bg-color" content={2}/>{/*3*/}
        <Button className="button-element normal-bg-color" content={3}/>{/*3*/}
        <Button className="button-element normal-bg-color" content={"-"}/>{/*3*/}
        <Button className="button-element normal-bg-color" content={"."}/>{/*4*/}
        <Button className="button-element normal-bg-color" content={0}/>{/*4*/}
        <Button className="button-element normal-bg-color" content={"/"}/>{/*4*/}
        <Button className="button-element normal-bg-color" content={"x"}/>{/*4*/}
      </div>
      <div className="reset-equals-container">
        <Button className="button-element reset-button" content={"RESET"}/>
        <Button className="button-element equals-button" content={"="}/>
      </div>
    </section>
  );
}
