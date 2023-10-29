# CynthiaCMS/`git-pull`

Plugin to run `git fetch` & `git pull` on intervals from within CynthiaCMS.

## config.json

| Name                        | Function                                                     | Default               |
| --------------------------- | ------------------------------------------------------------ | --------------------- |
| `Enabled`                   | Disables or enables `git-pull` completely.                   | `false` (disabled)    |
| `PullInterval`              | Sets intervals between pulls in milliseconds.                | `"7200000"` (2 hours) |
| `FullRestartOnIntervalPull` | Forces Cynthia to quit (& let built-in Nodemon restart it) after pulling, making sure changes are loaded into Cynthia immediately. May decrease stability if done too often.<br /><br />Note: If Cynthia's `nodemon` sees a file change it wants to restart for, it will anyways. This setting is mainly for non-default files and stuff. | `false`               |
| `PullonStarts`              | Does a `git fetch` & `git pull` immediately after Cynthia is started. | `true`                |

