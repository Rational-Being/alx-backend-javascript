export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;

    if (trueOrFalse) {
        task = true;
        tasks = false;
    }

    return [task, task2];
}