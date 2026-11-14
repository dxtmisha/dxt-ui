# Constructor Update Completion Registry

An entry tracks a component's progress and completion through the cycle in [constructor-update.md](../../ai-prompts/constructor-update.md). Each stage column records the UTC completion timestamp (`YYYY-MM-DDTHH:mm:ssZ`) when that stage finishes, updated progressively after each stage (or `Skipped (<YYYY-MM-DDTHH:mm:ssZ>)` for `Visual testing` when existing cases apply), with `-` for stages not yet completed.

A component is considered **completed** only when `Date (ISO 8601, UTC)` and **all** stage columns are filled. Before starting work, check this registry and entry freshness: skip a completed component only when it and its dependencies are confirmed unchanged since `Date (ISO 8601, UTC)`. If any changes occurred since `Date (ISO 8601, UTC)`, re-run the entire cycle from scratch. Incomplete entries (where `Date (ISO 8601, UTC)` or any stage column is `-` or missing) are never skipped as completed.

Maintain one row per component without duplicates. If a cycle stops mid-way, keep the timestamps of already completed stages while leaving `Date (ISO 8601, UTC)` and unfinished stages as `-`. Uncommitted changes always require re-verification.

| Component | Date (ISO 8601, UTC) | Dependencies | Architecture | Code review | Tests | Build | Demo | Visual testing | Wiki |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Image | 2026-11-14T04:20:43Z | 2026-11-14T04:06:38Z | 2026-11-14T04:07:07Z | 2026-11-14T04:07:29Z | 2026-11-14T04:07:48Z | 2026-11-14T04:10:47Z | 2026-11-14T04:11:07Z | Skipped (2026-11-14T04:12:47Z) | 2026-11-14T04:20:43Z |
| Skeleton | 2026-11-14T06:29:50Z | 2026-11-14T06:23:16Z | 2026-11-14T06:23:41Z | 2026-11-14T06:24:32Z | 2026-11-14T06:24:49Z | 2026-11-14T06:27:41Z | 2026-11-14T06:27:58Z | Skipped (2026-11-14T06:29:30Z) | 2026-11-14T06:29:50Z |
| Icon | 2026-11-14T10:52:14Z | 2026-11-14T10:36:37Z | 2026-11-14T10:37:01Z | 2026-11-14T10:37:29Z | 2026-11-14T10:46:56Z | 2026-11-14T10:49:24Z | 2026-11-14T10:49:46Z | Skipped (2026-11-14T10:51:15Z) | 2026-11-14T10:52:14Z |
