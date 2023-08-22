"use client";

import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./store";

type Props = {
  children: React.ReactNode;
};

export default function PersistStore({ children }: Props) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
