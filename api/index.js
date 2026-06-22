module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const action = req.query.action;

  const playlistData = {
    "playlist": {
      "Bangladesh": [
        { "name": "BTV", "url": "http://103.116.140.18:8080/live/btv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/b/b3/BTV_logo.png" },
        { "name": "BTV WORLD", "url": "http://103.116.140.18:8080/live/btvworld.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/b/b3/BTV_logo.png" },
        { "name": "ATN BANGLA", "url": "http://103.116.140.18:8080/live/atnbangla.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/0/07/ATN_Bangla_logo.png" },
        { "name": "CHANNEL I", "url": "http://103.116.140.18:8080/live/channeli.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/4/4c/Channel_i_logo.png" },
        { "name": "NTV", "url": "http://103.116.140.18:8080/live/ntv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/1/1d/NTV_Bangladesh_logo.png" },
        { "name": "RTV", "url": "http://103.116.140.18:8080/live/rtv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/b/b8/RTV_logo.png" },
        { "name": "BOISHAKHI TV", "url": "http://103.116.140.18:8080/live/boishakhity.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/f/f0/Boishakhi_TV_logo.png" },
        { "name": "EKUSHEY TV", "url": "http://103.116.140.18:8080/live/ekusheytv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/d/d4/Ekushey_Television_logo.png" },
        { "name": "SOMOY TV", "url": "http://103.116.140.18:8080/live/somoytv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/5/52/Somoy_TV_logo.png" },
        { "name": "INDEPENDENT TV", "url": "http://103.116.140.18:8080/live/independenttv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/5/5e/Independent_Television_logo.png" },
        { "name": "JAMUNA TV", "url": "http://103.116.140.18:8080/live/jamunatv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/3/36/Jamuna_TV_logo.png" },
        { "name": "GAZI TV", "url": "http://103.116.140.18:8080/live/gazitv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/5/5f/Gazi_TV_logo.png" },
        { "name": "T SPORTS", "url": "http://103.116.140.18:8080/live/tsports.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/d/d4/T_Sports_logo.png" },
        { "name": "NAGORIK TV", "url": "http://103.116.140.18:8080/live/nagoriktv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/1/1a/Nagorik_TV_logo.png" },
        { "name": "CHANNEL 24", "url": "http://103.116.140.18:8080/live/channel24.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/a/a3/Channel_24_logo.png" }
      ],
      "Fifa_world_cup_2026": [
        { "name": "FIFA TV", "url": "http://103.116.140.18:8080/live/fifatv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/a/aa/FIFA_logo_without_text.svg.png" },
        { "name": "SPORTS 24/7", "url": "http://103.116.140.18:8080/live/sports24.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sports_icon.svg/1024px-Sports_icon.svg.png" },
        { "name": "T SPORTS HD", "url": "http://103.116.140.18:8080/live/tsportshd.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/d/d4/T_Sports_logo.png" }
      ],
      "Indian_l_music": [
        { "name": "MTV INDIA", "url": "http://103.116.140.18:8080/live/mtvindia.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/0/07/MTV_logo.png" },
        { "name": "9XM", "url": "http://103.116.140.18:8080/live/9xm.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/e/e0/9XM_Logo.png" },
        { "name": "B4U MUSIC", "url": "http://103.116.140.18:8080/live/b4umusic.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/d/d4/B4U_Music_logo.png" },
        { "name": "VH1", "url": "http://103.116.140.18:8080/live/vh1.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/f/f7/VH1_logo.png" }
      ],
      "Indian_l_4k_ultra_hd": [
        { "name": "STAR SPORTS 4K", "url": "http://103.116.140.18:8080/live/starsports4k.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/e/ec/Star_Sports_logo.png" },
        { "name": "SONY SPORTS 4K", "url": "http://103.116.140.18:8080/live/sonysports4k.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/a/ad/Sony_Sports_Network_logo.png" }
      ],
      "Bangla_News": [
        { "name": "SOMOY TV", "url": "http://103.116.140.18:8080/live/somoytv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/5/52/Somoy_TV_logo.png" },
        { "name": "INDEPENDENT TV", "url": "http://103.116.140.18:8080/live/independenttv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/5/5e/Independent_Television_logo.png" },
        { "name": "JAMUNA TV", "url": "http://103.116.140.18:8080/live/jamunatv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/3/36/Jamuna_TV_logo.png" },
        { "name": "CHANNEL 24", "url": "http://103.116.140.18:8080/live/channel24.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/bn/a/a3/Channel_24_logo.png" }
      ],
      "Islamic": [
        { "name": "MADAH TV", "url": "http://103.116.140.18:8080/live/madahtv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Symbol_of_Islam.svg/500px-Symbol_of_Islam.svg.png" },
        { "name": "PEACE TV", "url": "http://103.116.140.18:8080/live/peacetv.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/6/69/Peace_TV_logo.png" }
      ],
      "Movies": [
        { "name": "ZEE CINEMA", "url": "http://103.116.140.18:8080/live/zeecinema.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/5/55/Zee_Cinema_Logo.png" },
        { "name": "SONY MAX", "url": "http://103.116.140.18:8080/live/sonymax.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/9/90/Sony_Max_logo.png" },
        { "name": "STAR GOLD", "url": "http://103.116.140.18:8080/live/stargold.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/d/d7/Star_Gold_logo.png" }
      ],
      "Kids": [
        { "name": "CARTOON NETWORK", "url": "http://103.116.140.18:8080/live/cartoonetwork.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/4/45/Cartoon_Network_logo.png" },
        { "name": "POGO", "url": "http://103.116.140.18:8080/live/pogo.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/0/00/Pogo_logo.png" },
        { "name": "NICKELODEON", "url": "http://103.116.140.18:8080/live/nickelodeon.m3u8", "stream_icon": "https://upload.wikimedia.org/wikipedia/en/8/87/Nickelodeon_logo.png" }
      ]
    }
  };

  if (!action) {
    res.status(200).json({ "user_info": { "username": "murad", "password": "123456", "status": "Active" }, "server_info": { "url": "https://" + req.headers.host } });
  } else if (action === 'get_live_categories') {
    const cats = Object.keys(playlistData.playlist).map((cat, index) => ({ "category_id": (index + 1).toString(), "category_name": cat, "parent_id": 0 }));
    res.status(200).json(cats);
  } else if (action === 'get_live_streams') {
    const catId = req.query.category_id;
    const keys = Object.keys(playlistData.playlist);
    const targetCat = keys[catId - 1];
    if (targetCat && playlistData.playlist[targetCat]) {
      const streams = playlistData.playlist[targetCat].map((ch, index) => ({ "num": index + 1, "name": ch.name, "stream_type": "live", "stream_id": index + 1000, "stream_icon": ch.stream_icon || "", "stream_url": ch.url }));
      res.status(200).json(streams);
    } else {
      res.status(200).json([]);
    }
  }
};
