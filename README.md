## Jest + Puppeteer Test

### WSL2のArchLinuxでChromiumを動かす際のメモ

#### VcXsrv

- config.xlaunch

```config.xlaunch
<?xml version="1.0" encoding="UTF-8"?>
<XLaunch WindowMode="MultiWindow" ClientMode="NoClient" LocalClient="False" Display="0" LocalProgram="xcalc" RemoteProgram="xterm" RemotePassword="" PrivateKey="" RemoteHost="" RemoteUser="" XDMCPHost="" XDMCPBroadcast="False" XDMCPIndirect="False" Clipboard="True" ClipboardPrimary="True" ExtraParams="-ac -nowgl" Wgl="True" DisableAC="False" XDMCPTerminate="False"/>
```

#### .zprofile

```.zprfile
export DISPLAY=$(route.exe print | grep 0.0.0.0 | head -1 | awk '{print $4}'):0.0
```

### ブラウザ上の動作を記録してpuppeteerコードにしてくれるchrome拡張

- [Headless Recorder](https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?hl=ja&q)