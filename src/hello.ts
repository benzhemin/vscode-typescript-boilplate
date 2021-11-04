function* objectEntries(obj: Record<string, unknown>) {
  const propKeys = Reflect.ownKeys(obj);

  for (const propKey of propKeys) {
    // `yield` returns a value and then pauses
    // the generator. Later, execution continues
    // where it was previously paused.
    yield [propKey, obj[propKey as string]];
  }
}

const jane = { first: "Jane", last: "Doe" };
for (const [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

console.log("hello. typescript");
