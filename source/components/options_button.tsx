/* @jsx h */
import { h } from "preact";
import { useCallback } from "preact/hooks";
import browserAPI from "../utilities/browser.ts";

export default function OptionsButton() {
  const onClick = useCallback(() => {
    browserAPI.runtime.openOptionsPage();
  }, []);

  return (
    <button onClick={onClick}>
      Options
    </button>
  );
}
