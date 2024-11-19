import { html, fixture, expect } from '@open-wc/testing';
import "../ist-256-project-2.js";

describe("Ist256Project2 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ist-256-project-2
        title="title"
      ></ist-256-project-2>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
