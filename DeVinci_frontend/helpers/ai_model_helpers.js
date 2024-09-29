const availableAiModels = [
  {
    id: 'gemma-2b-it-q4f32_1-MLC',
    name: 'Gemma',
    size: 'Small',
    parameters: '2 billion',
    performance: 'Good',
    default: true
  },
  { //requires shader-f16
    id: 'Llama-3.1-8B-Instruct-q4f16_1-MLC',
    name: 'Llama3.1 8B',
    size: 'Large',
    parameters: '8 billion',
    performance: 'Super Good',
    default: false
  },
  { //requires shader-f16
    id: 'SmolLM-1.7B-Instruct-q0f16-MLC',
    name: 'SmolLM 1.7B',
    size: 'Small',
    parameters: '1.7 billion',
    performance: 'Good',
    default: false
  },
  { //requires shader-f16
    id: 'SmolLM-360M-Instruct-q0f16-MLC',
    name: 'SmolLM 360M',
    size: 'Very Small',
    parameters: '360 million',
    performance: 'Quite Good',
    default: false
  },
  { //requires shader-f16
    id: 'SmolLM-135M-Instruct-q0f16-MLC',
    name: 'SmolLM 135M',
    size: 'Super Small',
    parameters: '135 million',
    performance: 'Alright',
    default: false
  },
  { //requires shader-f16
    model: "https://huggingface.co/mlc-ai/Qwen2-7B-Instruct-q4f16_1-MLC",
    id: "Qwen2-7B-Instruct-q4f16_1-MLC",
    name: 'Qwen2',
    size: 'Large',
    parameters: '7 billion',
    performance: 'Very Good',
    default: false
  },
  {
    id: 'Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC',
    name: 'Hermes 2 Pro Llama3',
    size: 'Large',
    parameters: '8B billion',
    performance: 'Super Good',
    default: false
  },
  { //requires shader-f16
    id: 'Hermes-2-Pro-Mistral-7B-q4f16_1-MLC',
    name: 'Hermes 2 Pro Mistral',
    size: 'Large',
    parameters: '7B billion',
    performance: 'Super Good',
    default: false
  },
  {
    id: 'Llama-3-8B-Instruct-q4f32_1-MLC',
    name: 'Llama3 8B',
    size: 'Large',
    parameters: '8 billion',
    performance: 'Super Good',
    default: false
  },
  {
    id: 'Phi-3-mini-4k-instruct-q4f32_1-MLC',
    name: 'Phi3',
    size: 'Medium',
    parameters: '3.8 billion',
    performance: 'Very Good',
    default: false
  },
  { //requires shader-f16
    id: 'TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC',
    name: 'TinyLlama',
    size: 'Very Small',
    parameters: '1.1 billion',
    performance: 'Alright',
    default: false
  },
  {
    id: 'Qwen1.5-1.8B-Chat-q4f32_1-MLC',
    name: 'Qwen 1.5',
    size: 'Small',
    parameters: '1.8 billion',
    performance: 'Good for Chinese',
    default: false
  },
  {
    id: 'stablelm-2-zephyr-1_6b-q4f32_1-MLC',
    name: 'Stable LM 2',
    size: 'Small',
    parameters: '1.6 billion',
    performance: 'Good',
    default: false
  },
  { //requires shader-f16
    id: 'RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC',
    name: 'Red Pajama',
    size: 'Medium',
    parameters: '3 billion',
    performance: 'Alright',
    default: false
  },
  { //requires shader-f16
    id: 'Mistral-7B-Instruct-v0.2-q4f16_1-MLC',
    name: 'Mistral',
    size: 'Large',
    parameters: '7 billion',
    performance: 'Very Good',
    default: false
  },
  { //requires shader-f16
    id: 'Llama-3-70B-Instruct-q3f16_1-MLC',
    name: 'Llama3 70B',
    size: 'Gigantic',
    parameters: '70 billion',
    performance: 'Insane',
    default: false
  },
  { //requires shader-f16
    id: 'WizardMath-7B-V1.1-q4f16_1-MLC',
    name: 'WizardMath',
    size: 'Large',
    parameters: '7 billion',
    performance: 'Great for Math',
    default: false
  },
// Android WebGPU models
  {
    model: "https://huggingface.co/mlc-ai/Qwen2-1.5B-Instruct-q4f32_1-MLC",
    id: "Qwen2-1.5B-Instruct-q4f32_1-MLC",
    name: 'Qwen2 1.5B',
    size: 'Tiny',
    parameters: '1.5 billion',
    performance: 'Good',
    default: true,
    android: true
  },
  {
    id: 'phi-2-q4f32_1-MLC-1k',
    name: 'Phi2',
    size: 'Smaller',
    parameters: '2 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  {
    id: 'RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC-1k',
    name: 'Red Pajama',
    size: 'Medium',
    parameters: '3 billion',
    performance: 'Alright',
    default: false,
    android: true
  },
  {
    id: 'Phi-3-mini-4k-instruct-q4f32_1-MLC-1k',
    name: 'Phi3',
    size: 'Medium',
    parameters: '3.8 billion',
    performance: 'Very Good',
    default: false,
    android: true
  },
  {
    id: 'Llama-3.1-8B-Instruct-q4f32_1-MLC-1k',
    name: 'Llama3.1 8B',
    size: 'Large',
    parameters: '8 billion',
    performance: 'Super Good',
    default: false,
    android: true
  },
  {
    id: 'Llama-3-8B-Instruct-q4f32_1-MLC-1k',
    name: 'Llama3 8B',
    size: 'Large',
    parameters: '8 billion',
    performance: 'Super Good',
    default: false,
    android: true
  },
  { //requires shader-f16
    id: 'SmolLM-1.7B-Instruct-q4f32_1-MLC',
    name: 'SmolLM 1.7B',
    size: 'Small',
    parameters: '1.7 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  /*
  { //requires shader-f16
    id: 'SmolLM-360M-Instruct-q4f32_1-MLC',
    name: 'SmolLM 360M',
    size: 'Very Small',
    parameters: '360 million',
    performance: 'Quite Good',
    default: false,
    android: true
  },
  { //requires shader-f16
    id: 'SmolLM-135M-Instruct-q4f32_1-MLC',
    name: 'SmolLM 135M',
    size: 'Super Small',
    parameters: '135 million',
    performance: 'Alright',
    default: false,
    android: true
  },
  {
    model: "https://huggingface.co/mlc-ai/Qwen2-0.5B-Instruct-q4f16_1-MLC",
    id: "Qwen2-0.5B-Instruct-q4f16_1-MLC",
    name: 'Qwen2 q4f16_1',
    size: 'Tiny',
    parameters: '0.5 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  {
    model: "https://huggingface.co/mlc-ai/Qwen2-0.5B-Instruct-q0f16-MLC",
    id: "Qwen2-0.5B-Instruct-q0f16-MLC",
    name: 'Qwen2 q0f16',
    size: 'Tiny',
    parameters: '0.5 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  {
    model: "https://huggingface.co/mlc-ai/Qwen2-0.5B-Instruct-q0f32-MLC",
    id: "Qwen2-0.5B-Instruct-q0f32-MLC",
    name: 'Qwen2 q0f32',
    size: 'Tiny',
    parameters: '0.5 billion',
    performance: 'Good',
    default: false,
    android: true
  }, 
  {
    model: "https://huggingface.co/mlc-ai/Qwen2-1.5B-Instruct-q4f16_1-MLC",
    id: "Qwen2-1.5B-Instruct-q4f16_1-MLC",
    name: 'Qwen2 q4f16_1',
    size: 'Tiny',
    parameters: '1.5 billion',
    performance: 'Good',
    default: false,
    android: true
  }, */
  /* {
    id: 'gemma-2b-it-q4f32_1-MLC-1k',
    name: 'Gemma',
    size: 'Smaller',
    parameters: '2 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  {
    id: 'Qwen1.5-1.8B-Chat-q4f32_1-MLC-1k',
    name: 'Qwen 1.5',
    size: 'Smaller',
    parameters: '1.8 billion',
    performance: 'Good for Chinese',
    default: false,
    android: true
  },
  {
    id: 'stablelm-2-zephyr-1_6b-q4f32_1-MLC-1k',
    name: 'Stable LM 2',
    size: 'Smaller',
    parameters: '1.6 billion',
    performance: 'Good',
    default: false,
    android: true
  },
  {
    id: 'TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC-1k',
    name: 'TinyLlama',
    size: 'Small',
    parameters: '1.1 billion',
    performance: 'Alright',
    default: false,
    android: true
  }, */
];

export const getAvailableAiModels = (isAndroid = false) => {
  return availableAiModels.filter((model) => isAndroid ? model.android === isAndroid : !model.android);
};

export const getDefaultAiModelId = (isAndroid = false) => {
  if (isAndroid) {
    return availableAiModels.find(model => model.android && model.default).id;
  };
  return availableAiModels.find(model => model.default && !model.android).id;
};

// Named event listener function such that it will only be attached once (anonymous event listeners may be attached mulitple times, so in casu each time initiateCollapsibles is called which messes up the functionality)
const addCollapsibleFunctionality = (event) => {
  event.target.classList.toggle('active-app-button');
  var content = event.target.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  };
};

export const initiateCollapsibles = () => {
  var coll = document.getElementsByClassName('space-details-collapsible');
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', addCollapsibleFunctionality);
  };
};
