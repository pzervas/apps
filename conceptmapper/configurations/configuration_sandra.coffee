"use strict"

window.golab = window.golab or {}
window.golab.tools = window.golab.tools or {}
window.golab.tools = window.golab.tools or {}
window.golab.tools.configuration = window.golab.tools.configuration or {}

window.golab.tools.configuration["conceptmapper"] = {
  auto_load: {
    type: "boolean"
    value: "false"
  }
  show_prompts: {
    type: "boolean"
    value: "false"
  }
  textarea_concepts: {
    type: "boolean"
    value: "true"
  }
  combobox_concepts: {
    type: "boolean"
    value: "false"
  }
  drop_external: {
    type: "boolean"
    value: "true"
  }
  concepts: {
    type: "array"
    value: ["length", "mass", "time", "electric current", "thermodynamic temperature", "amount of substance", "luminous intensity"]
  }
  relations: {
    type: "array"
    value: ["is a", "is part of", "has", "leads to", "influences", "increases", "decreases"]
  }
}