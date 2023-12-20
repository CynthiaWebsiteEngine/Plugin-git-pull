# CynthiaCMS/`git-pull`

Plugin to run `git fetch` & `git pull` on intervals from within CynthiaCMS.

## config.json

| Name           | Function                                                     | Default               |
| -------------- | ------------------------------------------------------------ | --------------------- |
| `Enabled`      | Disables or enables `git-pull` completely.                   | `false` (disabled)    |
| `PullInterval` | Sets intervals between pulls in milliseconds.                | `"7200000"` (2 hours) |
| `PullonStarts` | Does a `git fetch` & `git pull` immediately after Cynthia is started. | `true`                |

