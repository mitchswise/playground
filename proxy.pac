function FindProxyForURL(url, host) {
  PROXY = "SOCKS5 127.0.0.1:2001;SOCKS 127.0.0.1:2001"

  if (shExpMatch(host, "*.amazonaws.com")) {
    return PROXY;
  }

  return "DIRECT";
}
