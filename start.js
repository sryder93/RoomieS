// RoomieS prototype launch rules for the GitHub Pages build.
// Always open on the Prototype Lock Screen (unless already unlocked on this device),
// then Splash -> About RoomieS -> Sign In -> Welcome -> Loading City -> Discover.
window.RS_FORCE_LOCK = true;
(function () {
  try {
    var u = new URL(location.href);
    if (u.searchParams.has('screen')) { u.searchParams.delete('screen'); history.replaceState(null, '', u.pathname + u.search + u.hash); }
  } catch (e) {}
})();
