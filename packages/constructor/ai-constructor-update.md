# Constructor Update Completion Registry

An entry means that a component completed the entire cycle in [constructor-update.md](../../ai-prompts/constructor-update.md), including code review. Before starting work, check this registry and entry freshness: skip a component only when it and its dependencies are confirmed unchanged since the recorded completion time. If changes exist or freshness cannot be confirmed, repeat the full traversal and cycle according to the instruction, processing one constructor per invocation.

Add a component only after all steps complete successfully. Visual testing may be skipped if cases already exist for the component; record the reason and path in the table. A separate code review or incomplete cycle does not qualify for an entry.

After a successful repeated cycle, update the component's row, completion timestamp, and Git commit without duplicates. Uncommitted changes require re-verification; entries without a timestamp or Git commit are stale.

| Component | Completion timestamp (ISO 8601, UTC) | Git commit (HEAD) | Code review report | Visual testing |
| --- | --- | --- | --- | --- |
