function ref<T>(initialValue: T) {
  let state = $state(initialValue);
  return {
    get value() {
      return state;
    },
    set value(currentValue: T) {
      state = currentValue;
    },
  }
}

function addWindowListener<K extends keyof WindowEventMap>(type: K, listener: (event: WindowEventMap[K]) => void) {
  window.addEventListener(type, listener);

  return () => window.removeEventListener(type, listener);
}

export function useMousePosition() {
  let x = ref(0);
  let y = ref(0);

  $effect(() => {
    x.value = window.innerWidth / 2;
    y.value = window.innerHeight / 2;

    return addWindowListener("mousemove", (event) => {
      x.value = event.clientX;
      y.value = event.clientY;
    });
  });

  return { x, y };
}

export function useWindowWidth() {
  let width = ref(0);

  $effect(() => {
    width.value = window.innerWidth;    
    return addWindowListener("resize", () => {
      width.value = window.innerWidth;
    });
  });

  return width;
}