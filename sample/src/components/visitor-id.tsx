import { TextAtom } from "@sdui/blocks";
import { useContext } from "../hooks/use-context";

export function VisitorId() {
  const context = useContext();

  context.visitorId;

  return <TextAtom id="visitor-id" text={context.visitorId} />;
}
