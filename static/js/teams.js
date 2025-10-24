const proTeams = [
  {
    name: "Jakiro Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1629730552451843281/5051FEB9BD1D2B70B122AB863B51B4ACA7AD88D1/",
  },
  {
    name: "RAMPAGE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505760121157184267/3D80B074978BA4866B46F5163DAAA1CCA7737F56/",
  },
  {
    name: "Kaiser",
    logo: "https://cdn.steamusercontent.com/ugc/2432578705340317496/E0656236FE313DC892355323859D1CD0615178F5/",
  },
  {
    name: "Immortal Dragons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461860299823059332/5C74F53DABBFA4FEEAD1065DD6451ECDD864AB4B/",
  },
  {
    name: "Reaper Of Death",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2094795101417494432/8DD3DEA68B547164595D940BEF9E0DB2533863A9/",
  },
  {
    name: "Big Bang Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2019352804996053730/B2F33387BA6420EF613A6A80085DA457BF81CA75/",
  },
  {
    name: "Refugio",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1836915738113356986/E408590D6F09DC263E99FDEF969688C641FED775/",
  },
  {
    name: "YBN Team",
    logo: "https://cdn.steamusercontent.com/ugc/14454279686673899947/6065436A477030425ACEE17AC408C22F093421D4/",
  },
  {
    name: "DoDoBro",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2291832163357969146/FA9FCCF0C4F79C44B7BD5AB6E5EAA4798DCD025B/",
  },
  {
    name: "MIssclickTV",
    logo: "https://cdn.steamusercontent.com/ugc/787479461928379940/176C2F4512A26873226F6F35BD56618E0A90E302/",
  },
  {
    name: "GACHI PERCHIKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1774958469327240624/2464781147EF3A1137EC15F111ED39119F772AD2/",
  },
  {
    name: "Hobbyhorser's",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456222204375656321/9D0F181550223E96F2402187AEADE48890CC6522/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2536172773849248594/B978A72E73E3091CDF6289034DA5A11024859C4D/",
  },
  {
    name: "Falanga Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2446098162678791859/80F6BD1E9C6C4FC8DC4CC5F042E7EA49ABC06C86/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493390850506067441/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "MONTE ",
    logo: "https://cdn.steamusercontent.com/ugc/2297461440058922936/44B6C46F1F48325340342CDC065F119E5103C75A/",
  },
  {
    name: "Рыцари Hiden pool'а",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/884259198341578366/8C4CC9EDB4D83BD1BA75C279976E493D2923C6ED/",
  },
  {
    name: "FryBoys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2033991345204182594/79EEADCDF65A8741B290B31A2DBD36750D275444/",
  },
  {
    name: "747 Live Dota",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2189373145594606878/1769AD939A3861D6FC4292C37FC63E5C50EC6D3F/",
  },
  {
    name: "Кассовый разрыв",
    logo: "https://cdn.steamusercontent.com/ugc/18301580891660740956/39FCED4CFD05CA35FA1C13618E2135E03CD97B9F/",
  },
  {
    name: "The Covenant",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2187121345783071266/E1E6B530D0C644B81A08CE51ED03A9BB5698D1C0/",
  },
  {
    name: "Team Tea",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547430415560743333/1056433968395FB3F218D934DF778ED9A34910D7/",
  },
  {
    name: "Limitless Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1458555895300721111/1E53E1BD14D20323EDD6C75F37D53C39E3CC2DD6/",
  },
  {
    name: "TEAM TITANS",
    logo: "https://cdn.steamusercontent.com/ugc/10625724868598809675/41E34778A583212C8F6D9D25D9527E2DF6E6EBD4/",
  },
  {
    name: " Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442720999830491183/3DDD0D4DAE56A067D2B08BAEF6AC6C75D94884A6/",
  },
  {
    name: "Riyadh Chefs 2.0",
    logo: "https://cdn.steamusercontent.com/ugc/2316605543533779410/861C62272D2BDD066D2AAA86EDA9A4C5FA8EE5FA/",
  },
  {
    name: "ДРЕВНИЕ РУСЫ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434831555543563478/48AF4CA3C8B72047108235C9179998A3B2A6B261/",
  },
  {
    name: "Team Zaprudka Prime",
    logo: "https://cdn.steamusercontent.com/ugc/59209206693338706/164F4CEF71280236ECC5EDE6BAF769BBBFC8841C/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2499008933815848006/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "AnTec Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460726700063083458/6DF288B771746C1E49F57A642552B4EBE5E322F0/",
  },
  {
    name: "HAVU",
    logo: "https://cdn.steamusercontent.com/ugc/1833543457080341173/97E231A7DB51D0CA99DD8D8668835FBA8FE7B09C/",
  },
  {
    name: "Beyte Tombu",
    logo: "https://cdn.steamusercontent.com/ugc/356149150088654627/C66E39D474E770065A390FD604D2C3F3D7EAEE88/",
  },
  {
    name: "Slaughter  star",
    logo: "https://cdn.steamusercontent.com/ugc/2283950641160794418/5E07610ECBECE3B2FF70BD506962F9371EEE03E4/",
  },
  {
    name: "ZeroIQ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1821139005804905873/A61B50CC02268F101726051FFA53D60120DA91E7/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2549682215150686551/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "CONTABILIDAD Y AUDITORIA ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2371796196867415021/A73E5AA60702DA28B04DD83E2829C02D91604656/",
  },
  {
    name: "чарончик",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483241994927562822/8CBB995376A6754BA9BCAC11B0021A445389EAC4/",
  },
  {
    name: "Lava Esports ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2020458443820677798/6DBE7E16C897F641DC4BA91F1F04D784905F72B5/",
  },
  {
    name: "WhiteIce",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8544345002945076/443273C4AC118ECCC0BDA3BFA9D2CD09E07E9D80/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/16610794213061712843/316F67C51D538439877450D7A073402423E8B417/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2459620193691752841/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://cdn.steamusercontent.com/ugc/2502382832092927234/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "winzero",
    logo: "https://cdn.steamusercontent.com/ugc/17334938514038202139/41D035D8513D4EF3A12C5EBB1F2E3B246FFA9020/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2481000678834385467/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "TeamBaheagamer",
    logo: "https://cdn.steamusercontent.com/ugc/12163800216684210950/BFF847C296C7DB4FB75F74ACF80629A5F7DF27E9/",
  },
  {
    name: "5 Tylers",
    logo: "https://cdn.steamusercontent.com/ugc/18070869529406964376/76A4D4BFAA46FFE4BDD3719B39D67ED99AC5FBD8/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2425840025974308160/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Fire Star",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2312098138829049015/AFC65C9766869ED37A6A96D92B8B61C58CD2BD0A/",
  },
  {
    name: "Randoms Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455116747419194524/5E7AA2C4896A6EB1212B673B731DD9838ECCFB27/",
  },
  {
    name: "IHC",
    logo: "https://cdn.steamusercontent.com/ugc/2514771532510530932/AA92D7C7649DD3366A31E0E1F772356805B73442/",
  },
  {
    name: "business club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455117864631601557/069C7E7A630A8FA333ED65FE72820D4091D24953/",
  },
  {
    name: "Xtreme Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2402194226059610590/E3CF4B6C4B2CFB974A9B415141E4A37317AD4D80/",
  },
  {
    name: "Belarus",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072107134/6632B8AB7AF84F924C38B4B5C13D91AA27188BFD/",
  },
  {
    name: "DESTESTABLES DE CARA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511393199380148037/A34EC83FD8FFF0807AE3378117E0ECFD804E1EC5/",
  },
  {
    name: "Matreshka",
    logo: "https://cdn.steamusercontent.com/ugc/2289581108031278201/DE2ED21F4DEEB8C3E302C5A0AF9CAF8CC84E8BA8/",
  },
  {
    name: "Team Essence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/49076833991814630/EA506824463B73C57366214CF965C02FF801A999/",
  },
  {
    name: "Kaiser",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2225402665762262456/FA330CB6723AB076E3E9D867C3EA849B53D62854/",
  },
  {
    name: "ASAKURA",
    logo: "https://cdn.steamusercontent.com/ugc/2370671116173459609/9854CD03A6A44348475DC298295552B5CEA70794/",
  },
  {
    name: "Level UP esports",
    logo: "https://cdn.steamusercontent.com/ugc/2538424573666795850/206FD952692403A1BDA90BABF25B448CFBD5EEC9/",
  },
  {
    name: "Perú Rejects",
    logo: "https://cdn.steamusercontent.com/ugc/13052640096169721011/D40BDDE51B4C0EC9E2B2625C6768EA4AC813E4C9/",
  },
  {
    name: "Team of Super Lobsters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488871493287076659/91778412DCEA97D5246947A2B09F901A67B74DC0/",
  },
  {
    name: "Jabberwock",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518152702753424167/2AB8AC270B48E1B90F97F6ECA128BC350254D68E/",
  },
  {
    name: "Team Liquid",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470870949426210306/1D9A4C799B6351A72351406301FB3A3DC4CAD5AA/",
  },
  {
    name: "Thriving",
    logo: "https://cdn.steamusercontent.com/ugc/17738395363147645440/BCFB02DEFACB578EB4C8144E5503D3313F1DDC47/",
  },
  {
    name: "Белочка Худвинг",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2053134271720167078/0CE6B00028727001343C412668D694CF7C41C6C7/",
  },
  {
    name: "Team Kobolds",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2462977603804344116/289965BA1A48CC692D9E133DAC9EF95DC590FC64/",
  },
  {
    name: "MOUZ",
    logo: "https://cdn.steamusercontent.com/ugc/15055398113877035166/3EA33A8516BDE538B7963F044CD1B7AB4B0BB60D/",
  },
  {
    name: "Azure Ray",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298587339939886506/26FF6DD1070476EAF1C69DD30B259FBB197F0256/",
  },
  {
    name: "Teamᴧq",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482135655852829353/2C31C6B61195F352C9DD5D5F35908E68661BD9B8/",
  },
  {
    name: "REAL ECLIPSE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1929254752465573749/361F2A6C8D795A02396A031F45011DC69AD552AE/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2386432261337001246/B454BEA3898446DFA0101B4577440B9AD466F0CA/",
  },
  {
    name: "Cat Girls",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2392062395224132102/2394748DC339F92F0CE3D7662623879DD3C58411/",
  },
  {
    name: "Pride",
    logo: "https://cdn.steamusercontent.com/ugc/13084701799979520413/29CC53F7B06575F31080E00B97683F2E06CDF17C/",
  },
  {
    name: "Puraka esports",
    logo: "https://cdn.steamusercontent.com/ugc/11916605160982788801/56552B57FBCF39AF4AE54F2371C5BAFEE39A6E02/",
  },
  {
    name: "One Move",
    logo: "https://cdn.steamusercontent.com/ugc/2429222166861438379/2016A60B73B29A620CFA81A830603361CBB388AD/",
  },
  {
    name: "MAG.Yolo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495638295527816056/700DB41D40B7BCE2DEDA786E061023CB94C5583F/",
  },
  {
    name: "Virtus Wara",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/7416500508731896/D111D0A5763181122FC9FAA3BA2F9F96A5808758/",
  },
  {
    name: "YatoroFaN",
    logo: "https://cdn.steamusercontent.com/ugc/2488881628767904498/DD46D80A023DC1B617DD3F9C321AAF32932DF469/",
  },
  {
    name: "Night Vision",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2001324397658024099/35E9953E42B26F1F51DB7285BA04DC200FC27A76/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/13453052755084524891/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Team Echo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430341181992840712/258BDC28543623B7705F31209DC5F18E978849B1/",
  },
  {
    name: "VENOM",
    logo: "https://cdn.steamusercontent.com/ugc/11923313307929733/0B5CD347C0A23AA9E88CFDD7BFFEF57C70E192A1/",
  },
  {
    name: "ETH",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5937503625155707330/ACFD989C782B6FAED45CE2BBBE4F731A2EF23364/",
  },
  {
    name: "averans team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482121240833422017/BD866402E03FA87CF8C44D55360C98F41B00585E/",
  },
  {
    name: "Times New Roman",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477632689722246954/FC7438062C98156373617F21586D1FBF4E35C7B3/",
  },
  {
    name: "TOXIC TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/2062133768656646467/0DC776B80F708E21F03277337CF7BBAAFBA07712/",
  },
  {
    name: "KND do marabaixo",
    logo: "https://cdn.steamusercontent.com/ugc/62590172410932965/23E6C619B32215B4CADBEBC92F4E37B796126415/",
  },
  {
    name: "brainrotS",
    logo: "https://cdn.steamusercontent.com/ugc/13507827908381960990/F313F3E2D68CF6BA918007BB201169F59F253968/",
  },
  {
    name: "eSpoiled",
    logo: "https://cdn.steamusercontent.com/ugc/12151579140932746225/A9E4132B12671244A194F68779793550B1C8C2E8/",
  },
  {
    name: "AIM POSSIBLE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8538725261485438/F5943DED800619F1736A1B59C8F93CB17B0B1311/",
  },
  {
    name: "Team Discipline",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264814781722213373/54171FAE519CA6D0D1C9A57C1BF17BBC3F7B3FAE/",
  },
  {
    name: "NEUTRALES RABIOSOS",
    logo: "https://cdn.steamusercontent.com/ugc/2370670296976458075/56AAD9C4970FCD6A8A1321427618114A8E6C68C0/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2453989425916363513/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "小企鹅",
    logo: "https://cdn.steamusercontent.com/ugc/13736809763233262312/ECD30D924011D13F3149F7BF234F364D534B7EBA/",
  },
  {
    name: "SMALL CAMP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459620193677446431/EC82DED47B6598BA95EB905FC85937FDA3455D6F/",
  },
  {
    name: "Villains",
    logo: "https://cdn.steamusercontent.com/ugc/2509141399549063313/FDCE04892DF4FCEA67376055C17C39731FB751A6/",
  },
  {
    name: "Fart Sniffers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2265941315494927629/82604DD67184ED8A7CF1738E74CA329DD9FADDEC/",
  },
  {
    name: "Sworn Die",
    logo: "https://cdn.steamusercontent.com/ugc/1893228189115135367/7B3DB4DB3D54C15F2647A719B02F0584344C7B55/",
  },
  {
    name: "EPICENTER",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/950725693398590216/782F67764CA836493D97AE5D6019DE5DEBC2C82F/",
  },
  {
    name: "Yangzhiganlu",
    logo: "https://cdn.steamusercontent.com/ugc/2224276042704422213/008833949AD3544697322138136E7FA81EA5EC4C/",
  },
  {
    name: "Alina boys ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2162350909943879520/EED5F78D1A75F76AA6712284F862B177B869A6B6/",
  },
  {
    name: "Los Magikarps",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/823441571252987467/9EB7D35004E589C1E33E2C3D51B4ECC6BB2D056F/",
  },
  {
    name: "Trator Indiano Dota 2 Club",
    logo: "https://cdn.steamusercontent.com/ugc/18190260742433374201/56EB4058DD46C68778DFF77B10B8689A53366462/",
  },
  {
    name: "Dominatrix",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2443836672845546041/27EA9658B4E3579D43DBA49A38530A3D26F2AB84/",
  },
  {
    name: "FalconBlade",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1984429644901656783/F2E66623B2AED1C79BD070EBF07FFABEA941F3F7/",
  },
  {
    name: "Чезабретки",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2517031118027152362/7ADDE2801E2ABFC387DC11A6F52901AA9213FFBA/",
  },
  {
    name: "3 pos diff",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476508692282702993/11A67E517EA7631DE7E5CC9721228B630E6F9630/",
  },
  {
    name: "Dark Reef junior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642076979097263/58ED30601D79F70A1A9682A481FE6E3C51F6BB94/",
  },
  {
    name: "Hexi'S Sexis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488891688818830662/CF30823C7F28F012AB912A0C25882C3ABB9D4D5C/",
  },
  {
    name: "Legacy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483257751331641617/0F960E60CEB27A6732146E98A194B9E3F8E29BE4/",
  },
  {
    name: "Team Essence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457366491410895426/3951D498077AFA3551401B9CB3D3B34B742E1A43/",
  },
  {
    name: "Witness",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484377308959584043/86479167343B46233D0613C7A14E8F6AA11D7CB7/",
  },
  {
    name: "Degen Dinos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2270444281216466466/0314A851D3D409F5C6D3AF7C06CD1B971018427B/",
  },
  {
    name: "Blind Owl Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2520412448265196584/6B128593E42A50EE116FBC2FC008C057814DCD62/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2425840025974308160/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "norm telka",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/419189600161208625/1E46C4CB45EBE114BCA88FC3BFB26F1510991172/",
  },
  {
    name: "ritashidog",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468610439990153535/AB6CB928802261F857DE3A220826A87ED2DC18DD/",
  },
  {
    name: "Basados",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492268755033029292/C221C89916A4F2BED27EA4E2352499CC262E796A/",
  },
  {
    name: "Farmadores de Aura",
    logo: "https://cdn.steamusercontent.com/ugc/16126365391304135833/119289B8E7B08AB752474249E38095C469327362/",
  },
  {
    name: "Dark Reef",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5936394557582435461/B5398471379883A7671552FF59F6D89C046D0A4D/",
  },
  {
    name: "NextUp",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461853153297201611/C52B99377AAF023282EB555ADE0E097EF3D690E9/",
  },
  {
    name: "KOLHOZAN TEAM ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499012105946292668/7AA14E936EDFD7D2BF6EB15FAB17D5DF3A20B83D/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2372921462482080530/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "CRIMINAL",
    logo: "https://cdn.steamusercontent.com/ugc/11455159705348023939/3C3B18485F69013AE3CA648239A941F4C352656C/",
  },
  {
    name: "KromsateliSmerti",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/50203276507718768/0F3D6EDDE71BE3034E829E1D87736081E7F8CE2F/",
  },
  {
    name: "FH gaming",
    logo: "https://cdn.steamusercontent.com/ugc/14818513080011055975/829D172FBF487C3C7CAF83F7DE437C60B9891317/",
  },
  {
    name: "FEED TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2354888042055878033/F0723FC5583821AF6D47B53FE9A442AA198626F3/",
  },
  {
    name: "Team Rayz Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486619694624859216/39E1524A5DCC9C402CC0DA1B67E961F2AC553255/",
  },
  {
    name: "BetBoom Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501271299873667086/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "PEWPEWPEW",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2318857027623854709/B7BBAA4C1B4494479BE4F06BA7FA91CBFEA68704/",
  },
  {
    name: "VETEMENTS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2440469200010788677/7BA004448258D1E2326BC3AF39612EB7A55012A9/",
  },
  {
    name: "BondeSemFreio",
    logo: "https://cdn.steamusercontent.com/ugc/15010287010978992077/D5F36924DFDA11383409CAFA8FE2AC286497D490/",
  },
  {
    name: "Inner Circle",
    logo: "https://cdn.steamusercontent.com/ugc/16417023722841217441/64DDB27F8A50FEA6869CFD8392ED29CE674E26C1/",
  },
  {
    name: "MAG Indonesia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5967903001149279219/C2049C9028F12B8E7245E0E44DD86D645BCDB5F5/",
  },
  {
    name: "Legendary Elite",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/16422647193723043/17D86806BDCC53C74D7C769518D5874882855592/",
  },
  {
    name: "SnakeHole",
    logo: "https://cdn.steamusercontent.com/ugc/2536171416449518184/93E6C15D8E5CFB2EB4A68BFFAEA6A39898B1ED4D/",
  },
  {
    name: "Love Your Life",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2319979438175363566/771A7032B00CCF3A990204B6D82145B74E515CE3/",
  },
  {
    name: "Голландский штурвал",
    logo: "https://cdn.steamusercontent.com/ugc/13678176994549864356/46E3CD81F4A8920C8EA92922401E8E26BED89E97/",
  },
  {
    name: "4Pirates",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40066371400695154/40610ED2D88AE06E3B3D625F4561580244014352/",
  },
  {
    name: "Adonis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2272695542118100887/C23BA363EEAB4B7480B219132E49A4E29579EAAE/",
  },
  {
    name: "The MongolZ",
    logo: "https://cdn.steamusercontent.com/ugc/2431473966680677209/9F562CA4B4466BCA414B33046BDE07CC4B2255FC/",
  },
  {
    name: "Hans Entertainment Squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2018225171742700037/9A17ADDCA3763E51434BF3565ED4573263CCE79F/",
  },
  {
    name: "Scrubs Getting Carried",
    logo: "https://cdn.steamusercontent.com/ugc/2028343458340782529/E14596BC0DDC11E158BFB2D0042BA15BC9B146CD/",
  },
  {
    name: "INFINITY GAMING ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461852599991415616/6034AB32952F3E712D8BE9DE288F9E0F4D649EC4/",
  },
  {
    name: "Amigosos",
    logo: "https://cdn.steamusercontent.com/ugc/772868668373636801/C51A553ADABD82BD53D91D8CBABDD0061B57FE52/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1772699046724205365/4B26D0595EF6D331640462985C7C6E01E1BA63AD/",
  },
  {
    name: "TEAM FREEDOM ESPORT",
    logo: "https://cdn.steamusercontent.com/ugc/2035115975506964675/73428644D267DE860E1D9497E1A62C56F87619AD/",
  },
  {
    name: "pangolier s javelinom",
    logo: "https://cdn.steamusercontent.com/ugc/1852678988747798218/13734C5F707C49CF2880386C3B044D8754667C91/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/12968383039530964509/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Vorpal Swords",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430325873981468195/945049E71056E6B942FEFA047E25ECA446563906/",
  },
  {
    name: "BOOM Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2908503275318752/52C6F6228C73CDB6855C04B64FF21D061D2C15A9/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487760715922702548/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Apex Genesis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441586999439290451/0F48C94C7A1F1E5FCB4A339E23F52CBEE97D8024/",
  },
  {
    name: "AEA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2249046564306117777/5EE1E2F2F9A95AB7E783F3DD8B15C1286BAB4461/",
  },
  {
    name: "Studenite",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1790214152884974/CEC5C9CBAFF2BBE5E0733B950A1733382B13793F/",
  },
  {
    name: "Invaders",
    logo: "https://cdn.steamusercontent.com/ugc/2297462073171121106/5EF06B2A21F8BDFA6E3A99CE45C896E47B05A926/",
  },
  {
    name: "Tenjiku Gang",
    logo: "https://cdn.steamusercontent.com/ugc/33320028301510279/64365E53E55BC55CB168D8309F9E56B39AB8A7A7/",
  },
  {
    name: "7tyFly Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2278325580554499733/58308D0A1A7D8465CFD0E13468684CFC03FF23DD/",
  },
  {
    name: "TeamCompromiso",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33316045524333921/2220F9F74FB1353BEB8275883BCBB33FDAFBB6C9/",
  },
  {
    name: "Team Lynx",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/55832233435837295/D8A33E25255EEC070A12895900E6F2D4C18046CA/",
  },
  {
    name: "Balrogs  Esports™ ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2047493501274243998/0D75B3722B2CFFD223DD21087EA19793EE9CE475/",
  },
  {
    name: "Bociarnia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474254356505462957/74FA8AA899D224D90B17CE62B48747533823476D/",
  },
  {
    name: "Shinobi",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2509152814145111516/93DC1C1821D9A35255BA1D767498D62635199EBD/",
  },
  {
    name: "UnderBeer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470877290285840583/27E61FF811EEC9698A029B7E93D14EFCE53A1C69/",
  },
  {
    name: "Twin team",
    logo: "https://cdn.steamusercontent.com/ugc/9955266891947340059/CBD76B4D0ED5D7224BCB3D63749B3B905238FDDF/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/34441311447342919/231E40DB1581137118431CF748CAB4E861D27D38/",
  },
  {
    name: "Entity",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2079029969559624942/E3DF187AB0BAC034E1027B99C843FF6BE279BE8A/",
  },
  {
    name: "pig monsters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5936377725255412591/EC5CFAD80CD15F84F4E2BFD89366AA57FAE4D09C/",
  },
  {
    name: "TOXIC TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/10077335978964674149/6429F6C9EB721DFE53F7C1458E2501991C0EA543/",
  },
  {
    name: "пуджики123",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2422444574634645596/FE825F6F99DEBA5648763878EFB536B2344AC389/",
  },
  {
    name: "Team Tough",
    logo: "https://cdn.steamusercontent.com/ugc/2298586614153129772/34892DA3BE31B7E7E9E4BED828EB54B3A055388A/",
  },
  {
    name: "The Cut",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1647718150508756948/90879B998647BD093E090BA3A03C501778A8BBFC/",
  },
  {
    name: "FALL VICTIMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1839182035511443777/DF26E33597EAEB9EBB3F085DA1CA7667E5E11BCB/",
  },
  {
    name: "polish rejects",
    logo: "https://cdn.steamusercontent.com/ugc/44581382342606300/DAB3717B235DA3658C3C9F62C2CF8FD876D37C25/",
  },
  {
    name: "Wildcard",
    logo: "https://cdn.steamusercontent.com/ugc/14173210407158797/EAFCC9BE14FBFC9DC1EA3D03D62772D38F7DF15F/",
  },
  {
    name: "Timebomb",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/782983914005899103/25CD219C92709CC324DF099C92E8EC1B2892010C/",
  },
  {
    name: "0FFN1K1 Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2200632144679626242/A2F081035C2FC22A8CA5AE535155E17363BEB747/",
  },
  {
    name: "Entity",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2522660617416645389/10BAAC5E8362A26F821118D16098E297BF27FE0D/",
  },
  {
    name: "不知道哇",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2301965039666694367/8E31EE76EAA22FA6AF8D057A456AC15A41D13E05/",
  },
  {
    name: "XD",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467500224808216395/04757B75F08D7F685218E1CBBC6EE474F3E03B97/",
  },
  {
    name: "ILS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2304217472609725311/CBBE3810EC48BBC4EF737A454D101EEE2B34D4FE/",
  },
  {
    name: "Солевые TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2061007868758727266/3E97F58B77E8621249573A365B11C3E4B76A764F/",
  },
  {
    name: "MZ_Starominskiy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2510286324229451392/72081C27F71ECF2670DA210779250BCD306A74E2/",
  },
  {
    name: "Swift Knights",
    logo: "https://cdn.steamusercontent.com/ugc/2446107492346973561/03C1A606587B371C139805153F66CD7367C6E837/",
  },
  {
    name: "DRune",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2280576552131881929/F0B866F1CF06C9581B6EC01530F3A54A26E6FF40/",
  },
  {
    name: "LEVIATAN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2428075427285893664/6D8E6DC748F5B92B5A41217F1D007264A23BCA61/",
  },
  {
    name: "SHIBANYKA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2372902440563092559/897F7DB499E9E81C9C45CD64E10CCA746BE2CC66/",
  },
  {
    name: "Volka Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471984170544044221/924FDB4F7584A51FAA97BF9B7676E8FE383F990B/",
  },
  {
    name: "Aurora Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/13052583756685508/22B0338D7E09FB2F021E5DB5BBEFFD170D5E5E1A/",
  },
  {
    name: "Aztec Duelist",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470876656789739091/F6316FD70CDB7DA1939C6017BE8FF87865E0ECB3/",
  },
  {
    name: "MDY",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2305342739387226376/F0B9E274C4F1D10C76E9D2D9EBF2A90CF1E73272/",
  },
  {
    name: "TEAM GOLDERA",
    logo: "https://cdn.steamusercontent.com/ugc/965348817768879558/5A965E39A0DCF7FE9657EAF72BAAC277A453F7D9/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/17559235508272825/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "TeamWaska",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2376297984889887726/F2376446D05157B080B5D506473EE2F1D43097BF/",
  },
  {
    name: "ToLight",
    logo: "https://cdn.steamusercontent.com/ugc/13751617450350882245/E56171571997EF022A2C29AF9B35C63A66347EB3/",
  },
  {
    name: "Mad Monkeys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2278325040128724260/A10316EBD20ECE720470ED4A5D07B3C6DDDC693A/",
  },
  {
    name: "vPotoke",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33314777904202180/7DEF69D126A58948A57D82D77EAB530DE1824F32/",
  },
  {
    name: "Maycam Evolve",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2444982226670085570/5C702AA459A11586B6F07E92250032D35535D522/",
  },
  {
    name: "PERRO NEGRO",
    logo: "https://cdn.steamusercontent.com/ugc/54708143746379362/DC20BA7EAD66F30C4F0ADF441B76BF4741025EED/",
  },
  {
    name: "Betaesports",
    logo: "https://cdn.steamusercontent.com/ugc/2444964386871547878/2F00BEB80804EEA2249ED9CAD2EBC75675E81504/",
  },
  {
    name: "Selskiy skvad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/781856840832181859/DA1982715A8BD4817483BE25FB819BCAEBC8EE90/",
  },
  {
    name: "Pocoyo Sistemas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2371796196879786614/768FB178D0868733565C167DC13B24C0F4A64E39/",
  },
  {
    name: "Stryi Park",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2106054788490105801/D88EB5D3A70AF2AF0AA9B0AA3288B2AF87CF0258/",
  },
  {
    name: "MEGAN FOX FUN CLUB",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1840307935383368679/334B6F1C60A3C9C2B5644366157AE9CD23754B50/",
  },
  {
    name: "Romania",
    logo: "https://cdn.steamusercontent.com/ugc/38952517558893398/3BB35E2E5535FFDCCE97D441B0C7BD0C6A5E32B1/",
  },
  {
    name: "Team Lynx",
    logo: "https://cdn.steamusercontent.com/ugc/55832233435837295/D8A33E25255EEC070A12895900E6F2D4C18046CA/",
  },
  {
    name: "PSG.Quest",
    logo: "https://cdn.steamusercontent.com/ugc/2481004682513190539/324F8847AD21944686DED20FB3E2C0DEA4154AE7/",
  },
  {
    name: "MIRACLE ESPORT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2077890844713344537/CCFBC43CBBB7D4DACC82613CD30E05FF7E36AAC7/",
  },
  {
    name: "Mister Maniacs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508011791700199350/FC1DC14A21F3B99692E7057A7246290AEBB7DE51/",
  },
  {
    name: "на исполнение",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1897722585649328321/6C032CA8A62FFEC6D3594E6D09B61361377B0CA0/",
  },
  {
    name: "NDS",
    logo: "https://cdn.steamusercontent.com/ugc/11679709744085564410/63258E45010D37077BC4B550D952B1B55568BC5A/",
  },
  {
    name: "Castawake Esports",
    logo: "https://cdn.steamusercontent.com/ugc/15328846907758140998/166BEC30425FB7AA6466D6AD42F5C5B96A7C319E/",
  },
  {
    name: "D-Roar",
    logo: "https://cdn.steamusercontent.com/ugc/5085158533727707180/0E4D2B3EE201270C7D4C011152813EB59EF3DE99/",
  },
  {
    name: "Lucky Bulldogs",
    logo: "https://cdn.steamusercontent.com/ugc/2001335808621483127/5A5F024213E96EFED441218F3DBE395B9C10308C/",
  },
  {
    name: "Air Defence",
    logo: "https://cdn.steamusercontent.com/ugc/2417958726624961451/B735C35337F59604BC717BC7E2FDFC3B09080C6D/",
  },
  {
    name: "HolyTeam",
    logo: "https://cdn.steamusercontent.com/ugc/2045232594440611734/6C72924B50012D14EB63CB93471A3CE174EF4DE2/",
  },
  {
    name: "Herman and CO.",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474239941816117214/180A6CDB2745FEBF891B43617EAC39D6EB4CCB5F/",
  },
  {
    name: "VooDooSh Team",
    logo: "https://cdn.steamusercontent.com/ugc/15774571312694647209/295D8E5BC838405612620570073FE05536861CC5/",
  },
  {
    name: "Team Amplify",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2424697902442433105/2150AFD8E84586C8663F5FBE5D4C35826007B305/",
  },
  {
    name: " REALOG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505775114441731432/899373201DA72BAB0809EE4F121817111DFA2FF5/",
  },
  {
    name: "Team Vibe",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460743557623795460/FC0AD17A69547F5C00E6B1C007014302C5864AB8/",
  },
  {
    name: "Ace Assasin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/35562945665657662/853BB801BB3C6A04C0C960B79AA5A7A40C1D3B99/",
  },
  {
    name: "Empyrean Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2268193115299272759/B8312FC9B6E6DBF0B5DDFC72D909AC685C71A8FC/",
  },
  {
    name: "Team Blade",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2450612994431038508/F1FC152AF5583CCA9726459D8F23107861DCF8EF/",
  },
  {
    name: "Istanbul Tech",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/964242094219381909/AE3815F55903B718B755A381E3BE25B28D7D407E/",
  },
  {
    name: "Myth Avenue Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486639255470734489/335E278D66166679FA98F953C2F50959A75C58D3/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/18045761817887243011/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "FLYING FORTUNE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1914618053677183905/643B71E4BC0996372029AC8E917018769F378A6F/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/34440133990173229/231E40DB1581137118431CF748CAB4E861D27D38/",
  },
  {
    name: "bomj team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2421335792783357818/9AF93646341F63F0BFB7ED291C75B35A9B260DAC/",
  },
  {
    name: "Shark Boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2155595510487066107/9529714A57184E33AB4AABD0D215B9BB2922D632/",
  },
  {
    name: "Elephant 小象",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2028362569180114964/73AAF5E2CBA59ADE719057D9E58DEFC9533BB77D/",
  },
  {
    name: "KingMakers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2553059914893668199/F8C89DD188B071DF7CE3282D7E3615F1BB5F0B8B/",
  },
  {
    name: "ShIShUlI_V",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2512521001371768591/C9797250D3ACED7BA22F96F595CB1E39D5429362/",
  },
  {
    name: "Degen Dinos Div2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2277200314576087551/0314A851D3D409F5C6D3AF7C06CD1B971018427B/",
  },
  {
    name: "SaveDat Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494523090790861628/8FFA877BBDF0FFF784B72A4327DB559E2763D9CC/",
  },
  {
    name: "accbuyers squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2309848621071339875/DE5DA55C04B62BB8BBAD00A7453A059754B4CACA/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490011247841414836/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Valhalla Creed",
    logo: "https://cdn.steamusercontent.com/ugc/16681070779692879320/3183F1032FE12EF3BA1022D41116A4081B885F61/",
  },
  {
    name: "Лес",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455102731614318379/F2B0B2A456D96B63CF6478A73B2483404BD15AED/",
  },
  {
    name: "Randoms Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2416817187172584251/5E7AA2C4896A6EB1212B673B731DD9838ECCFB27/",
  },
  {
    name: "ShelbyWalk",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2032850229518221838/945A28F5044BE3C8F162BEE44E5CFAF748616A0C/",
  },
  {
    name: "TNC Predator",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2108395.png",
  },
  {
    name: "Nethercore",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459621195379473716/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "Urina_Submarina",
    logo: "https://cdn.steamusercontent.com/ugc/45707916997586573/E3BB426E95C4D2FFF8AF419B147D2317AA919B82/",
  },
  {
    name: "NAVI Junior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2909225722380320/5C6EFC9004093ED29E9B48242DE79418BDDBFE30/",
  },
  {
    name: "Ofis Prezidenta",
    logo: "https://cdn.steamusercontent.com/ugc/40068908267780910/C6EF1751B16E3B8BBB72934C0AC6FDC68233B3E8/",
  },
  {
    name: "Kukaracha Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/50196299366573397/8E7EDFC01105F3509FD497DB9DCD4AFEEAB0F963/",
  },
  {
    name: "CTAC KOTOPbIU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/25434746167385534/7652FC5E7ECFED167702627643FAA2F9F9352B26/",
  },
  {
    name: "Sibe Team",
    logo: "https://cdn.steamusercontent.com/ugc/2523781268249407312/759C9DF3828E60B672A56F55580D64804FDEE70A/",
  },
  {
    name: "扶摇",
    logo: "https://cdn.steamusercontent.com/ugc/9666272728095801838/BB4DE2D87891D909F89C1C3D85B3DF11C2E8D8AD/",
  },
  {
    name: "Реальные Пацаны",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2097046179621373539/DA9A0136328913FB67E4C58CAAB52255F53AD7C5/",
  },
  {
    name: "Vanta Core",
    logo: "https://cdn.steamusercontent.com/ugc/18389834090024536928/18754E9AB4886ABC86095FE6E37ACA667605E898/",
  },
  {
    name: "Call911",
    logo: "https://cdn.steamusercontent.com/ugc/28805470170231590/97640BB0BB819D3FAE79D44A56B63DE2D98A5E84/",
  },
  {
    name: "pognavshe",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2448359292157116661/3C4A8FE194E8789F8AE433591777B77433F11497/",
  },
  {
    name: "Лепреконите",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484389447220707463/DF99BCDBA738B35EBC55773B257403A1584BB30D/",
  },
  {
    name: "Blacklist Rivalry ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2050860821377863997/BAE16F709F0AE46642FAD3366C78FD92FD2FD741/",
  },
  {
    name: "SIGIZMUNDI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/60335831197062001/66EB9C79665AA4F4F563BE166DEF6D0D94480D9C/",
  },
  {
    name: "Swift Knights",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2017088992310291098/09843295840179839F2FAF5870B9CBAC09E19911/",
  },
  {
    name: "Passion UA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2401067900023241791/D24A73F720EFE606E79D45631EBCD67D2F3D2568/",
  },
  {
    name: "IIMS e-Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2510270469393929431/B4AE331E4D7B3B5BBF302680A8597D88094D3013/",
  },
  {
    name: "gazovatorbl",
    logo: "https://cdn.steamusercontent.com/ugc/8544435822675099/0B0CCE2F22F4721912B21D9805F015116E57583C/",
  },
  {
    name: "Trailer Park Boys",
    logo: "https://cdn.steamusercontent.com/ugc/38949980569189726/53F2180D4DB13B6E96577D16F952B03E879EC514/",
  },
  {
    name: "Kalmychata",
    logo: "https://cdn.steamusercontent.com/ugc/2294087545396448242/A0CBDFC29BE2D76EC1D14132128D342234582231/",
  },
  {
    name: "EYE GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2529416016835596361/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "TEAM RPP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2412333668230853016/05C65E306D997A76CFED14653DB768B660FF7F89/",
  },
  {
    name: "Sosroko",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442719012382396222/75ADDA8BB2CCD9B535DB2C6761CD39E4DBDC33DA/",
  },
  {
    name: "Astronaut Rising Stars",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2308725511967890120/B85412E913B4AB8C41C05002970F3D492E82AB3D/",
  },
  {
    name: "Myxomoru",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503513338709012084/93CBD00A1055580B0B27E7A7C281BBC9460E6BDE/",
  },
  {
    name: "Team Klee",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2097046179637529531/D719D73590F6D8614DC5901F578C8880EF096439/",
  },
  {
    name: "Arvion Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/25432209483756435/295567007BD718732DBA98FC4ED724E8F775BF6A/",
  },
  {
    name: "5vpotoke",
    logo: "https://cdn.steamusercontent.com/ugc/6295715987979738/87A30849D48842E4DEFB207A4FD62119EF369E3B/",
  },
  {
    name: "BlackHorseTeam",
    logo: "https://cdn.steamusercontent.com/ugc/15716509271025451528/4C55B50669D2DCDD12B15C32CC1747EE7D5D8150/",
  },
  {
    name: "4Pirates",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40069633524260473/008F97F4B8ABBF94D965990526E8757F1E42E5AE/",
  },
  {
    name: "No Packet Loss",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1787858270397001/A248B0848ACBCC1B58EE8323ED0C0462B9449B02/",
  },
  {
    name: "INGENIEROS EN PIJAMAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2365040797423751632/08E92FCA5F9EE401800883EA114BEFB3789BF9F8/",
  },
  {
    name: "RBB GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/5165557994973959/D18880C92E047654EDF5DB283BF3A749DCFD440C/",
  },
  {
    name: "REAL ECLIPSE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2412313289525493186/FD5993C92A7CD4DAB88FB14DB2E360CFF84FB935/",
  },
  {
    name: "Team Llamas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434844780370443683/5D2815185E70251C530B73F04C41DE434BE730AC/",
  },
  {
    name: "TEAM GOLOVACH",
    logo: "https://cdn.steamusercontent.com/ugc/54712126540342407/8CAF7FEF577BF46568581DCC86FF88C84A9774AF/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2474243666702634607/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "New Zealand",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1979924688188641824/A01DECD4E7990C4A950B1AE50EA64F75B52720C3/",
  },
  {
    name: "Ninja Bros",
    logo: "https://cdn.steamusercontent.com/ugc/2490006266229881150/FC90CF44B6F55976119A8FD30C519F435E6D2270/",
  },
  {
    name: "NÙCLEO DOTA ",
    logo: "https://cdn.steamusercontent.com/ugc/15525587550245406883/7A904866938DBCB639EC6C8C45ABD21B7DEF8A1B/",
  },
  {
    name: "Oneone Eleven Esports ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2544052715661718637/19D10893F147017063D85DADD7BD4D2165889DAD/",
  },
  {
    name: "Miau miau miau",
    logo: "https://cdn.steamusercontent.com/ugc/17472787257805350885/42010404609279A0026752AE1DB329ACE72F83E6/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451719869366469529/645ABB2C6DDA71F2ACCC797EE912537D7CB75ABF/",
  },
  {
    name: "VIRTUS_NEPRO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453855821440814/87242769B02D28340B80F76DB60D803622AEF464/",
  },
  {
    name: "Qhali",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2411186841870152223/CB63D57ED3F48CD16221FD0D8B9FA9541E912F71/",
  },
  {
    name: "United States ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072131070/81FFEF4306F850C6D0A3E9A239DF070520BDB1F9/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2003571938580599854/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "сухарики",
    logo: "https://cdn.steamusercontent.com/ugc/2073401899780845617/CE2D6C2CA832EA01A9F2903FB3D25BF3957C08E6/",
  },
  {
    name: "q lobby einn",
    logo: "https://cdn.steamusercontent.com/ugc/14176477955561704/BB8329C81AB78920C521DB442EB78225955F7214/",
  },
  {
    name: "ETERNITY",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494520554835502380/7A20EAF76DE33BCB612A3569F0B8264AD0AECFFC/",
  },
  {
    name: "WOLF JOURNEY",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2283950641161604119/1E9B9B685AFDFF1E6D8BCEBACC4C8D0AA6B3D396/",
  },
  {
    name: "Play Five",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2246794764010266034/C9B8E7D7025426F455D28F813245623CC2800EF3/",
  },
  {
    name: "TeamCompromiso",
    logo: "https://cdn.steamusercontent.com/ugc/33316045524333921/2220F9F74FB1353BEB8275883BCBB33FDAFBB6C9/",
  },
  {
    name: "7AVAGE",
    logo: "https://cdn.steamusercontent.com/ugc/2060999808810033722/AD6B81F5AE83398723EEE7DBB544BDC2216E78B9/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/55829769476672190/66A70A578F13168E5D4A021F327B3256C7C7C44E/",
  },
  {
    name: "Team Zero",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2384179827551149860/D284923AE9D25AB431DCBF11D0E2CC88C495E00E/",
  },
  {
    name: "HardBass Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494512395622091332/B51307A563B31C0BD214C4EA82E6E62BF9A64270/",
  },
  {
    name: "МЯУ ПУШКА",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/816750855426730924/229B195F9602910307A46FB64D3ED9B447DFD5D6/",
  },
  {
    name: "tanasoglo prme",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419082724667677893/4BED723BC88A6B9A372A2FFAB2B8721C1FCCC913/",
  },
  {
    name: "МГАФК-2",
    logo: "https://cdn.steamusercontent.com/ugc/2404447927745295287/01348EA9300F7E5607DD7AAEA1A2CF4069CF5538/",
  },
  {
    name: "SerpentKing",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2512527516321129984/364CDED74159AF4703E524385B6D17694F2E88F0/",
  },
  {
    name: "Hail to the mentors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500139907647910677/5A0BB2FE690FCE85969FC48C4D3554F4ACCEA5D9/",
  },
  {
    name: "Team Kobolds",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2167980409447929846/289965BA1A48CC692D9E133DAC9EF95DC590FC64/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/13743177005895078824/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "ALL MUTE",
    logo: "https://cdn.steamusercontent.com/ugc/53582975013909439/3BF9DE86F28A7A805B4E2D0ACEE6AC9B94F443F0/",
  },
  {
    name: "Execration",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490004871924581269/9132E5E0903B2A368A00780415D69766292F5893/",
  },
  {
    name: "UZUMAKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2538423216318694079/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "Belgium",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496761026515247200/124B4F2EF40128DB5F3B864CC424F2B263238B7C/",
  },
  {
    name: "ТАНК",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1848168397345520023/8AD4F1B3BAFEF1120B737CA49509C2858C85B647/",
  },
  {
    name: "HELLBEAR HEROES",
    logo: "https://cdn.steamusercontent.com/ugc/2504646219095011633/000ACC2A4ADD9D3EBA21A1A4556FCC192415B318/",
  },
  {
    name: "HHW",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2151092033067704507/1B36E3E49707C2AADD6BCB1F70030445FE6DECA1/",
  },
  {
    name: "DiyiD Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029471106425866824/8C13A26B527EE197B9A6ED5F85F63C2B0FCC548C/",
  },
  {
    name: "L1GA TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2303094838073172312/3AA5DCFA7A58E0635C737F08E1A7B613B1DCCB37/",
  },
  {
    name: "Chimera Esports",
    logo: "https://cdn.steamusercontent.com/ugc/25429846520505742/8CC6F7D4209315AEB9CC55B5224FE95C6E757D91/",
  },
  {
    name: "DMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455104631629284478/B74AA7BD9C3BFAF7FABE05E2833719A5D9A3A386/",
  },
  {
    name: "БОМБАСТЕРЫ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2072264331390027639/7377ED07B2F8CDD865D68D8FA4EA6E201EB18FEE/",
  },
  {
    name: "Bright Crusaders",
    logo: "https://cdn.steamusercontent.com/ugc/17814800157767042639/1DB70894416C865659F1417EC6330B6DE78470F9/",
  },
  {
    name: "TEAM TOXI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2189373145602146037/851AD317A887E6CEFDB0E2D7674C0C056B49FF5E/",
  },
  {
    name: "Pirate and Cow",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33308435532471479/76D8BE8E8A8BA7D0E5525DB47E3361F1F6294D29/",
  },
  {
    name: "M001MP",
    logo: "https://cdn.steamusercontent.com/ugc/14545038640908786173/0ADE1CD14E9B00633786445815206473F14C209B/",
  },
  {
    name: "hong shi zhang zui",
    logo: "https://cdn.steamusercontent.com/ugc/10804696386908764331/9DDB8D9B54D5978D7B61AC227D82AB1A5F4DF8AF/",
  },
  {
    name: "The Covenant",
    logo: "https://cdn.steamusercontent.com/ugc/2187121345783071266/E1E6B530D0C644B81A08CE51ED03A9BB5698D1C0/",
  },
  {
    name: "Apes Togetor Strong",
    logo: "https://cdn.steamusercontent.com/ugc/47954012538013146/99E324E702ED015FB3355EB9A7B3C4358D96DE64/",
  },
  {
    name: "ЕУЛ от налоговой",
    logo: "https://cdn.steamusercontent.com/ugc/15607016613228691935/C3A4AC328013CC33D4AC32022C69E9795A7F6014/",
  },
  {
    name: "Burnout",
    logo: "https://cdn.steamusercontent.com/ugc/29939312488275295/63B824371E9D5A831B69C45B8933EECB0A92E90B/",
  },
  {
    name: "Silent Shadows",
    logo: "https://cdn.steamusercontent.com/ugc/25437998679007227/7035EC44FD0FCA19321C2B977C045CAD071B0844/",
  },
  {
    name: "Chill outstanding composed kings",
    logo: "https://cdn.steamusercontent.com/ugc/40076055415805975/C1E7269992B07EF11E5CC8248FD9543268096871/",
  },
  {
    name: "Las Foking Maquinas del Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/13121303730866372400/9CBEA768A539BD0543C612718D3E8A334E826413/",
  },
  {
    name: "Slimy Rats",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1829040959809148267/AC5E876461400767621E66997798599B44E04DF2/",
  },
  {
    name: "Flux",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/41189100113460376/096249E777121953D6AC624E04AA3C9637A268C9/",
  },
  {
    name: "Evil Rabbit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484379034731567359/66B65A630A7AC2850CDC5D621198CEDEEA39A8FD/",
  },
  {
    name: "Team Saharo4ek",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488885347925553473/D16E0F9A1624F29B6C3D9D6CEC3876759E5C15BE/",
  },
  {
    name: "Ivory",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466373057167958411/ADD1A0993B650AFCB009280DA81670AEB24F66B4/",
  },
  {
    name: "CHIPICHIPICHAPACHAPADUBIDUBIDU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2269319015204508879/95F2FC33BE9CE166626BCF38C2862A36FE8306E5/",
  },
  {
    name: "Pacific ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2421319307290243710/2D572643B2BDCCFDA346E9AB51833351BF8CE35E/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2380804214100888910/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "TK Esports",
    logo: "https://cdn.steamusercontent.com/ugc/36690755386959016/3A23E8092A46D17C4007492C02E7806E9527DEC5/",
  },
  {
    name: "Fantasy Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/12882313862798214253/B320F03E64EBD1450BF1246B1AF9985194C1D75A/",
  },
  {
    name: "PUDGE WARS",
    logo: "https://cdn.steamusercontent.com/ugc/1787390095890064077/4037268334D408062D975E3A04469342A54F3747/",
  },
  {
    name: "Team Cotton",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2277199680654245883/5E2CABCDA2903C430F6B015414857A3FAF268A33/",
  },
  {
    name: "gigachads",
    logo: "https://cdn.steamusercontent.com/ugc/5163648042607152/9B069F35E5C024C67D283BBF925A542CF29E8E50/",
  },
  {
    name: "Team  KEV",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2527155798055904204/2AEEDAB9C8203A2C066B01850585C6E37589FF9F/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497889558463190863/F7B75854544186B0FE27574C3A8C18DB68D0FC89/",
  },
  {
    name: "Flame ",
    logo: "https://cdn.steamusercontent.com/ugc/11343467367389822990/F0DBE63DED50705A37CF730E57F0DF04E1ADC776/",
  },
  {
    name: "BLACK STARS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2286206341282171359/8BF8A020B97A6D038494E3DE48432B9E995E837D/",
  },
  {
    name: "Bulgaria",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072130918/98672F0937C36EE31A99B0F18BB0E8FB3919724C/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1903353113609042234/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "li li",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2399941883269239820/356F98CADD3B5197DE86246D455B3857BE013208/",
  },
  {
    name: "SMALL CAMP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464123430263402327/0AD829DC5A85F5F624DED44F69050AFB179933EA/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459621195380151580/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Made in Philippines",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1899975198387120959/F3281DD8CF9289232B5D5E73E14662AC465E4F8A/",
  },
  {
    name: "Back to the Lobby",
    logo: "https://cdn.steamusercontent.com/ugc/43449144674022374/16D9284F4D447810E7A933856BED82811C787039/",
  },
  {
    name: "M80",
    logo: "https://cdn.steamusercontent.com/ugc/38941270872180974/66B383DCF84EB57927FCAC7F5CE0B6A70D0EDF23/",
  },
  {
    name: "PVISION",
    logo: "https://cdn.steamusercontent.com/ugc/11751543457229798134/1569CC553CB72963C8EC4C3F807EE50DA925BDC2/",
  },
  {
    name: "Pronouns",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2306473712153942928/D897070536171AFDC32521981252DEA5F564CCFE/",
  },
  {
    name: "Demonios ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1805404494409529112/0BC47B34123654E34B825FE743C60CCA6177746E/",
  },
  {
    name: "For the Dream",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2506891038474884528/8486A894128DFDE9E52087413AD71C225373A692/",
  },
  {
    name: "alwayswannafumimochi",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2371795562542576177/D13A57857E49F08387E08D3148DB7BBFA7C3B2AA/",
  },
  {
    name: "Team Complete",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2374046185081901458/F15141272200375C12CB923167789393E78420F9/",
  },
  {
    name: "Team Open Cur",
    logo: "https://cdn.steamusercontent.com/ugc/2190499045513715818/7FBBB7844773EE889D7A7719CCB254381878ABFE/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/10423059741947448476/316F67C51D538439877450D7A073402423E8B417/",
  },
  {
    name: "Risorto Dai Morti",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2276073240317936666/3D331FFD8CFF782003E698C6EA8AC8E0AD28D15C/",
  },
  {
    name: "НАЙ-СЛАБИТЕ ЕООД",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487767146940994384/F7B079B786200545AA1CEE876C4B12A4C9F03804/",
  },
  {
    name: "untilted",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2026102435212752839/1DD06DB7960996BA37E9013BA33B74F0B9294203/",
  },
  {
    name: "MYM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/784124162970010969/96F5645CF449B021C599ADC02727343652C35162/",
  },
  {
    name: "SСBears",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461865653118393342/59AE09B83E18741F82CE671214CE86BDFFE25B84/",
  },
  {
    name: "Agronomia 200",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518159379441033721/580520B782E6EAA7DEF33F95D9503C7A2CA3C530/",
  },
  {
    name: "Belarus",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130709/D6B0CDD0C96CF73EBAB3DE13905DDA2ADB1FB017/",
  },
  {
    name: "Rage Quit Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419084810592379760/BBEEFE4857287803D170B42040E29500C87800F1/",
  },
  {
    name: "老干杯",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1823390989352724078/58CF5405A86C00A1C11012FF0ADA5A536926610B/",
  },
  {
    name: "BOOM Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2916748038054832/52C6F6228C73CDB6855C04B64FF21D061D2C15A9/",
  },
  {
    name: "One Move",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1857183850310080331/2016A60B73B29A620CFA81A830603361CBB388AD/",
  },
  {
    name: "Belgium",
    logo: "https://cdn.steamusercontent.com/ugc/2496761026515247200/124B4F2EF40128DB5F3B864CC424F2B263238B7C/",
  },
  {
    name: "Dulo",
    logo: "https://cdn.steamusercontent.com/ugc/11924678141042588/850DA91C998CC86034906F3C7C2EF17B3E3FB5F5/",
  },
  {
    name: "Eye Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/17357712894689865165/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Free Stack",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446096078273768662/E8939FA0F492A90C42B1018C5974EF9AE2599A9F/",
  },
  {
    name: "BezCifr",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486634816017582560/AE9DD7570B65DAA4324919F1CAC5F9D416419ED8/",
  },
  {
    name: "Team Inmates",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2053126569396945884/2A43A922870C0FD80FA0F1C28BA1B1E5B1C7B9C7/",
  },
  {
    name: "Shinigami gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505770857729962528/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Sweden",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072129781/3B683E7F3BC4E87F94A04971DBADD605CD8E11C4/",
  },
  {
    name: "Red Raiders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/31056725716834145/F4B196E836F91507ADE2A1C5BFCE2FD0A2F11371/",
  },
  {
    name: "Лесная Братва",
    logo: "https://cdn.steamusercontent.com/ugc/2305347178336337378/29023BCFD7BD6DA0DBD7524E2B00080FC88A2BBB/",
  },
  {
    name: "DEVISION TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/52458247357880606/DACCFDDA13BE26BB048CF983AE0D7B6D6A28130C/",
  },
  {
    name: "Hininy1",
    logo: "https://cdn.steamusercontent.com/ugc/2264814240904866879/888DDDFF7D47471DA1C7653B3EF58E10C3532104/",
  },
  {
    name: "Perrito Panzon",
    logo: "https://cdn.steamusercontent.com/ugc/12524710744555430201/4176ED4067C4249009D1C3A62FEB796C3EAA3E8F/",
  },
  {
    name: "Vici Gaming",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/726228.png",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547431772259210710/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "Team Tityan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2286203878410656810/BFE5EC48A28DADB9DAFCC2488EE8C06F7A3DD520/",
  },
  {
    name: "XopoIIIee_Hac7poeHue",
    logo: "https://cdn.steamusercontent.com/ugc/17063979512525677626/C7EDBF43782390822AC5A8DD0283AB2788A35F46/",
  },
  {
    name: "маймуны",
    logo: "https://cdn.steamusercontent.com/ugc/9740179985781476746/FCA551EF08AA29AB9B6C8D999AA661B96D7D2C4F/",
  },
  {
    name: "Keepers of Divinity",
    logo: "https://cdn.steamusercontent.com/ugc/13901992033897367464/0F642AFBC57A9385C22934042BB442EF460B13BE/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497900427469091720/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Team Zilmer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2426948174262602918/F2307BAC14D7DE5BE59372390CCC5ABE6373994B/",
  },
  {
    name: "COPPYBEBRA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468608552756342648/12BC2CC0BF7C5FD5B8E28060E59C2429B0F314D1/",
  },
  {
    name: "堕落 Fallen Era 时代",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2000198497762866273/4B082045800974C4E2E7FC5D4EFAF3945AC5225B/",
  },
  {
    name: "Team Spirt 2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2095921001330270715/19F37D379E1B3CDE34D37B5B53DE96F49C4E5070/",
  },
  {
    name: "Arrow Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488879006790377397/056B6B8DEBE1DDB78288552B117828B64005DDCF/",
  },
  {
    name: "HouseHold Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2432577673800461225/E7AF4C273DF7AF34DD173E80005AD53BA8E4E674/",
  },
  {
    name: "mem pro kota",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/912423900270885482/6C2FDD27C6080D50725197070B4D18D42583DB61/",
  },
  {
    name: "LOKOMOTIV GORNA ORYAHOVITSA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452862258288703204/6B5AF25E02757D0786496048CDCEC6B3C709CCBC/",
  },
  {
    name: "tearlaments",
    logo: "https://cdn.steamusercontent.com/ugc/13054916969328839/7663A2A47B72EF63B9ACE9860B377CF97B35D98C/",
  },
  {
    name: "The Flame Stack",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2271567179639626787/A553B03E511C7E7368F6086FAD2776632A713B2C/",
  },
  {
    name: "4 GOZUS Y NERIF",
    logo: "https://cdn.steamusercontent.com/ugc/2263688342599161690/D511F281EDA7EB89D7FF859722EE573133888D2A/",
  },
  {
    name: "DOTAMIGOS G4MING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/45692699736973043/F2B60A475EA1D97877938A10260FB43A8CAA464F/",
  },
  {
    name: "Jigglin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/10795057523687683/EE9A7F08EEEDE9615FB062476EF11BA3F1ECAFDD/",
  },
  {
    name: "Puraka esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497900790524246321/7A5C13D253D94C0BFCCD5778EF68000E40D0744F/",
  },
  {
    name: "TK Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/36690755386959016/3A23E8092A46D17C4007492C02E7806E9527DEC5/",
  },
  {
    name: "Team DarkSide",
    logo: "https://cdn.steamusercontent.com/ugc/2313227936598303387/8ADF5A6DCC3EEC663F904D5BD4909B0DFBA17BC0/",
  },
  {
    name: "Habibis",
    logo: "https://cdn.steamusercontent.com/ugc/2467499590567114603/AEB73E78284BF41E1BF9CE07FE91B3228F58AD65/",
  },
  {
    name: "Eye Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/1880842325021945866/AD594D1C59AB23CF8AFD155209D477A382698B1A/",
  },
  {
    name: "Infamous Astra",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2032858469296116678/EDF6030FFA1952797EE94712BB781280D5034932/",
  },
  {
    name: "Eternal Crusaders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1930372606544398899/1A8A56C54D90514396F89FB37E317E10B2F4D9BC/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/16425010217324501/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Gamax eSports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298588777397934616/3A0E5A1FEAA07591FFB20F0EC448C143AF190909/",
  },
  {
    name: "KOBRAVEX",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2448358658634679382/52BA887A5EA8034A51B21513A3EEFFE90CFEFF8A/",
  },
  {
    name: "Nethercore",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442732965763263237/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "South Team",
    logo: "https://cdn.steamusercontent.com/ugc/2434829473594191224/34F6A641392FE31627ADFC81A12F78853B00F1AF/",
  },
  {
    name: "OrangeLinkerz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/607225036337628197/47EE7813764D9546F865D8306675483B16882B37/",
  },
  {
    name: "Numa Numa Iei",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2269315379821279184/6794D4B3CE5E1BAE2435762F6B2EC2D19ECE1BE3/",
  },
  {
    name: "Team Lipstick",
    logo: "https://cdn.steamusercontent.com/ugc/13411036163908823582/4DE748783F6C26F6539A42DD3CBEEFB07978C873/",
  },
  {
    name: "UB Warrior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2116185843309355287/4974A3B686513C326C073724C7D51346E064573D/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/12528991022742044848/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "INVADERS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2258059149859902833/656DCA363D4D031DCDB4A37D6DBE4131306F4B45/",
  },
  {
    name: "team_spunch",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2426948806794036591/7043D81A603F90F817981BA11899791497680EB1/",
  },
  {
    name: "Team Evil",
    logo: "https://cdn.steamusercontent.com/ugc/2386432895670424236/6AC4C1B762A14F29BB831039D1AD19DE3B1821F1/",
  },
  {
    name: "Бубновая жемчужина",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2182617746155154084/A64044FEE58D1ACC1A91796192577A7A2D9B7ACF/",
  },
  {
    name: "Old School",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1824524667104819739/3F5A636C8E10ADEDF4F8FCD1C5B68169F8CBAC1D/",
  },
  {
    name: "GodGenesis",
    logo: "https://cdn.steamusercontent.com/ugc/9329987715560972356/B1347DECEF95C4EA3817B9CB83832299AFE7A8C5/",
  },
  {
    name: "ZXC АКАТСУКИ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2433718881124315416/799AFB8869460BC6BFFDDFFF661FD3A859977C1A/",
  },
  {
    name: "PSPU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458472735718736949/1161024DB9251EAF41571D7CCE6648745226DDF4/",
  },
  {
    name: "Okak",
    logo: "https://cdn.steamusercontent.com/ugc/17507880226657413929/CC834BCFB7B94F1FF9D2FF7372D803157037DFC8/",
  },
  {
    name: "Bulls",
    logo: "https://cdn.steamusercontent.com/ugc/2300841854478940861/C15D149A72980F60C2A8D3E05C3A563B34A7D5D2/",
  },
  {
    name: "TheLadiesLove",
    logo: "https://cdn.steamusercontent.com/ugc/2061003429709757308/42DD00E27CB2F43BD0D20D7902237DADF5A9AEE7/",
  },
  {
    name: "Team Balú",
    logo: "https://cdn.steamusercontent.com/ugc/922560083888575668/FF589C067A1BB68C300FE3EBEB092D935461A864/",
  },
  {
    name: "Team Sheeps",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2288456143548320361/3A73260AACB9353FED54E5B08B1E0FA7E5204CBE/",
  },
  {
    name: "THE PURGE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469753292841977690/B3F668D5ED725987E6B404D44021F311BFAC0E36/",
  },
  {
    name: "Hokori",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33310519204986346/19A1ED92100AEF2B7A56C49DFCF0BA6915A4DD07/",
  },
  {
    name: "Started From the PotM.",
    logo: "https://cdn.steamusercontent.com/ugc/424816561352683120/E641D621FE9045FC3EBE1C747DC3D217D26EDA22/",
  },
  {
    name: "Woshite",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2066646500361794420/5130C900E3C63757C3594B01D4E620CE5EB335F6/",
  },
  {
    name: "EYE-gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1880842325021944166/AD594D1C59AB23CF8AFD155209D477A382698B1A/",
  },
  {
    name: "sibstrin.fruits",
    logo: "https://cdn.steamusercontent.com/ugc/2495647722478189287/0778F149D6F3E3CBC4F1F6002976CCEEA1E7EAF7/",
  },
  {
    name: "RizskiyGazMyass",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2210765243831300856/F97A56FC6FB13EF49F8060E944CF22642A0336E1/",
  },
  {
    name: "Sharahnytie Doteri",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473123383158648640/810E4F24DD00AD2A76D0413FC4C4CBF3826A0ED8/",
  },
  {
    name: "Fractal Horns JUNIOR",
    logo: "https://cdn.steamusercontent.com/ugc/11463695846398451485/D69238F8D0562FDF9C9220D5CE0DC6BBBB80071B/",
  },
  {
    name: "Savage Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495639017695283448/322F61B9E53822B5C88D83F87DB7C918B868A512/",
  },
  {
    name: "Team.Spectrum",
    logo: "https://cdn.steamusercontent.com/ugc/42325981314779170/3549E61F3CAEE52F54084C0BC6B0C8AF258A9FB6/",
  },
  {
    name: "The Mad Ronin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456221571824206436/93731858D7197A8E82F7A87AB4B63D8D7875C203/",
  },
  {
    name: "Continuum Esports Blue",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2322236310849472300/686F33B72DBF3E9FDF36FE7036B81C978AA2FFE6/",
  },
  {
    name: "REJECT May",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1875213840276400026/7DAD863A05938ACB59572CCBFDB158B3E4A6E944/",
  },
  {
    name: "Old Guns",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459618291248814632/F32D5EA05756851433AE6E496FB24BC2AA75A1C4/",
  },
  {
    name: "NoTilt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1821147433177317929/1B7B68B4D19C62CAA97C190937E1C5A9B1B48D1A/",
  },
  {
    name: "Rej's Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511401616430444952/7A746DC6A2B3F2AF827C0CCA1D6D74CBA9EC7F52/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2437083596129300812/31AFA1983D50823159714263D116D689B16FF143/",
  },
  {
    name: "Neutralcamp",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2397692528298850890/D99B8B26CD3647D4F362AA22CC0400EB21366FBC/",
  },
  {
    name: "Geek Fam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2047502867535132722/C72214A86E6C450DA8CF1A18AE9539B5CAEE7D45/",
  },
  {
    name: "Lava Esports ",
    logo: "https://cdn.steamusercontent.com/ugc/2020458443820677798/6DBE7E16C897F641DC4BA91F1F04D784905F72B5/",
  },
  {
    name: "Outcast",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2513644999196406452/F5EB32133680E04A5DA15B346C8B856AE6D7676E/",
  },
  {
    name: "Team Midasoglebsk",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/961986516654007274/B6D3F60419A46FBCFB02A0348CB44A65F10A6831/",
  },
  {
    name: "bob3r",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2008079162128201383/1EF3DB9E2B29E65F3D05481416C0A4E42BE09B5F/",
  },
  {
    name: "Baladewa5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1693900188081649938/23FABFEB18B78078B721562CC2AB32E80CED5065/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2307594539199380450/B6552232247E395A06E70B98FFE372954ED7A3C1/",
  },
  {
    name: "Qhali",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1745728629072594666/C19B7A8A8F6454EBD023F3652BE5E51FF970D373/",
  },
  {
    name: "godsnrpg",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/779623615872869658/04BE060E8127CA458221869EA2DA05CE38C0624B/",
  },
  {
    name: "OG.LATAM",
    logo: "https://cdn.steamusercontent.com/ugc/12741081049248012101/CA83F279CEB5DC52AE9FEC1176AC1E55908EEEFA/",
  },
  {
    name: "WAKANDA MADE IN CHYNA",
    logo: "https://cdn.steamusercontent.com/ugc/2017080744100038132/E73FD8FB850B3A6C647D88783BED42D79CB11112/",
  },
  {
    name: "IronClaw",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2420208080983768196/12511800F918C14353B7BDE2FF1D51755CE3D417/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485502666688221663/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Helios",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33313055670317078/9AA6D03044020B97E2B55A3EF516FDC871F1EF0F/",
  },
  {
    name: "Team Revolution",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1890976349225515300/1E75E67486674340B239FC7C924DD751855922BA/",
  },
  {
    name: "812)",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2403322027834185684/0CA6F19A95C1B29D63DCF4A0C3BC04AD9FC96EC8/",
  },
  {
    name: "D-Roar",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5085158533727707180/0E4D2B3EE201270C7D4C011152813EB59EF3DE99/",
  },
  {
    name: "BOOM Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2515893091079031980/52C6F6228C73CDB6855C04B64FF21D061D2C15A9/",
  },
  {
    name: "Lesbian Gay Bisexual Transgender",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/959718071456745022/7461C00F944E1F4FBB3E244E1803000EF2D64816/",
  },
  {
    name: "Basado Gaming ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1848189234752018215/567CC60A5C860E5D42107A576DBF92D3E4A872B7/",
  },
  {
    name: "Alone Gaming-",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1860545771105148086/ABD782080E1B63C97B89BC2E5F3612AAB3B45C9F/",
  },
  {
    name: "ECHPO4MAK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2538411089201122885/12F7C2A95A824FD1B9F853CA4154CD2683DD0CD8/",
  },
  {
    name: "ghgh",
    logo: "https://cdn.steamusercontent.com/ugc/2283952543894980552/5427F0EA0D083365A32DCF43017963A3842DB115/",
  },
  {
    name: "Rakuzan",
    logo: "https://cdn.steamusercontent.com/ugc/2503523949680034823/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "αTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485516526284506938/1C86524C484549C2E64A9524CD3E171C87AC0F99/",
  },
  {
    name: "Attack Shark RUSSIA",
    logo: "https://cdn.steamusercontent.com/ugc/16911685426992017753/4B6031ECF54B755CD5C570E2D82864C834078F2C/",
  },
  {
    name: "Team Mars International",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2285077174199120569/334F066AECE43C82CD46B37163BE91D676E2FC89/",
  },
  {
    name: "Чугунцы",
    logo: "https://cdn.steamusercontent.com/ugc/11006579111164281335/0CFCA90B087433DC7576626AEA00D3C35FC38650/",
  },
  {
    name: "Shadow Bastards",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456241225742605331/B7DD6F03DBAED2CC0FAE4F172068CF2087D28D0F/",
  },
  {
    name: "HYDRA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1977673132002351940/A9227AFA6C2DD7F9A1A8E0F5C4278579DB10833F/",
  },
  {
    name: "OCHO INSTINSKATA SILA!",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/442829694463383876/9BDFA53D7CCCB5ACF26F113ADC3E6B12208A41F3/",
  },
  {
    name: "Infinity",
    logo: "https://cdn.steamusercontent.com/ugc/2270441745021468359/0B29AFE6D9B224CB4EDB33A07AAC0D3FD19A00A6/",
  },
  {
    name: "PVISION",
    logo: "https://cdn.steamusercontent.com/ugc/2476508692281774105/EDE870E88FFD1C4E01DE40BF1B5E548D3459D046/",
  },
  {
    name: "KIBA ARMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2515905042592254976/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "322 Doto",
    logo: "https://cdn.steamusercontent.com/ugc/927047028174940865/F9C267BA74D399B314B3693941537A42DBC06DE5/",
  },
  {
    name: "MASCQUEICOLS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/9665171757155606/29DE45CF7F60CEF7EE77EA2D9DB6E7ED4209664F/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/5169816085687417/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Ninja Bros",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2540662890180503137/07AFC31672BE685FE8F97C32A697CF0CE02B955E/",
  },
  {
    name: "TEAM FREEDOM ESPORT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2035115975506964675/73428644D267DE860E1D9497E1A62C56F87619AD/",
  },
  {
    name: "LEVIATAN",
    logo: "https://cdn.steamusercontent.com/ugc/2476496009610060553/805B58DE6A151FD0946F26A8181F711AB38FDD9F/",
  },
  {
    name: "Steel Row",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1760364156123046625/7FF5404C308A73EC8052B813D66EDBED069BAEE0/",
  },
  {
    name: "RuleBreakers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499004593285468560/01903AB32A1A1ABA9E501DEFB8744F3328F39D52/",
  },
  {
    name: "Pomo1ka",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458481611077470497/97DDA30B5A0216A46DD938174BFC72E6BDCCE463/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499008933815848006/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "TEAM ROSTIK",
    logo: "https://cdn.steamusercontent.com/ugc/10697750855187800194/57102BE3B31946994F90E35A7D0944035BD1B1F6/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494515481390429581/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Silent killer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453582272336330/5CA27C9845C6CB2F21DF0776E0155ED13942CB44/",
  },
  {
    name: "Team Eternal",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500144980919950400/CE1FB59C82E8B7079EB37C17A2B31D7C8D8F06AD/",
  },
  {
    name: "Poke Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264815904175525471/689B46C581B0F7340AD532CD9B1D1A8B5796D722/",
  },
  {
    name: "ZolkaWarriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2265941315496334788/D4A9CD06CCDE6C8A72B472F3F8860929F5EC25E7/",
  },
  {
    name: "Ivory",
    logo: "https://cdn.steamusercontent.com/ugc/38943733604633912/47EF08FBD2435D6137E12364B9757558955403B8/",
  },
  {
    name: "Infamous Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2032858469296144304/EDF6030FFA1952797EE94712BB781280D5034932/",
  },
  {
    name: "Night Pulse",
    logo: "https://cdn.steamusercontent.com/ugc/2479883856029444185/44A2207BF5B75CADD5B02860CC3D78333E4E1E76/",
  },
  {
    name: "Bammysoy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298591238452720970/D1327CB4F1C336091246D8A42CEDCCEBB02F56FC/",
  },
  {
    name: "Virtus.pro",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1796396122320355023/2E833B3744ECB93AD9FF3797C0309B4ADB54AD2E/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/16432616702017523/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Ultra Nexus",
    logo: "https://cdn.steamusercontent.com/ugc/11871267442300108665/6A1069402D9EC7B51D1ACD058A2C3ADFB8617549/",
  },
  {
    name: "trash_blood",
    logo: "https://cdn.steamusercontent.com/ugc/2433703573709146580/C552D14E165A0CE8010B792D5311C329EFD9A5C8/",
  },
  {
    name: "C.C.B",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2375173896586984952/80E3C5E813D54DD11B31976A6AE8EB5B8EB9131A/",
  },
  {
    name: "Team Kirieshki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2195002645140073377/B26B202F38F43D99851C568636F0CED4CD31C60F/",
  },
  {
    name: "END GAME",
    logo: "https://cdn.steamusercontent.com/ugc/17556699334649420/D1FFC789AF8FFDB54E8049DD85A127BA306F0B3C/",
  },
  {
    name: "Virtus.pro",
    logo: "https://cdn.steamusercontent.com/ugc/1796396122320355023/2E833B3744ECB93AD9FF3797C0309B4ADB54AD2E/",
  },
  {
    name: "Big bald Connoisseur",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457349000350416012/ED22D52C8C214F08E1662E8647F4E3F270718B4E/",
  },
  {
    name: "Kiba arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2491144846348861651/194482426E7D6B96BE0AF99CB456EA5D4E6F0FA1/",
  },
  {
    name: "НГАСУ (Д)",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495647722478189287/0778F149D6F3E3CBC4F1F6002976CCEEA1E7EAF7/",
  },
  {
    name: "PARTIZAN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2421318674740967967/67EA5B638FD2F5A20AC34A90870C10188E9ECE5D/",
  },
  {
    name: "HYDRA",
    logo: "https://cdn.steamusercontent.com/ugc/2511403980000601665/A9227AFA6C2DD7F9A1A8E0F5C4278579DB10833F/",
  },
  {
    name: "Dragon Esports Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511394638736089872/F987F3AE486CD1869FC93BF2E5F012063C24B2C0/",
  },
  {
    name: "Лютики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482127496588478290/58139B3A34ED06D41F638DB9CE202E7583370989/",
  },
  {
    name: "4Pirates",
    logo: "https://cdn.steamusercontent.com/ugc/11928773496660470412/99DD15BFA6C283A2C3F6F72F8DEDFC8C4CCCD2F9/",
  },
  {
    name: "52turbo",
    logo: "https://cdn.steamusercontent.com/ugc/9852153172006757078/81CD07A5C8BD9ECB948251BA4CB7CABD41E2902D/",
  },
  {
    name: "FLUX ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471984170535415720/AD148C81D6DEF8580D83E562C6DD201B25AA833D/",
  },
  {
    name: "Cyberbay.pro",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2277200314550007648/5B3F0B5461180EAAC91467616178F06D6F57BDC0/",
  },
  {
    name: "Bullish on Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029488469112229180/34D162D52880896F6247D7CDDEC864179D3A5271/",
  },
  {
    name: "ji est'",
    logo: "https://cdn.steamusercontent.com/ugc/14147127136364945374/C7DAA2CA179CA06C04864206EEBA1911E55E4E45/",
  },
  {
    name: "Unity Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1869552606061814481/A457AEE8D7D7BC0A877359B167E8634D21C429F2/",
  },
  {
    name: "PNIPU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1779477811629482264/FD97F64BC468618B062EEBDBAF618EEE3BF670D4/",
  },
  {
    name: "KIBA ARMS",
    logo: "https://cdn.steamusercontent.com/ugc/2452865428987917753/782E74D6A8E46FC8D2B0F96490344A50BEF647B9/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486619694647755109/6CCADF5F1FEAD53BE069B0427D6D75F9598DA3D5/",
  },
  {
    name: "Чили Перчики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501272149855786277/94657EE7F1F55377D0D1E0D70DEF04E1BE75E55C/",
  },
  {
    name: "Red Raiders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2019352804989056512/6C3207F0C8D39AA045EEA757887E83ED04546627/",
  },
  {
    name: "Okak",
    logo: "https://cdn.steamusercontent.com/ugc/10291495157410159496/E0C8FA2CFB3A97FA47650696AABC61CAC185C275/",
  },
  {
    name: "MentalBoyz",
    logo: "https://cdn.steamusercontent.com/ugc/2430341182003674099/F4A29BD109EAF24779476F61620509B5375BDD45/",
  },
  {
    name: "AVULUS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2404446659850586707/16FDBE79DF89044DB65770A4CDF6D2C60AABA5E3/",
  },
  {
    name: "风骚俏寡妇",
    logo: "https://cdn.steamusercontent.com/ugc/15617938120634437971/867024BA831897327DF944C0891D983A13A8FA18/",
  },
  {
    name: "Geek Fam",
    logo: "https://cdn.steamusercontent.com/ugc/2047502867535132722/C72214A86E6C450DA8CF1A18AE9539B5CAEE7D45/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518160648464311384/056F96DE207C48CD3F16BA3108440F9A4C7923C8/",
  },
  {
    name: "TSU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2117313645623321632/2342B789CD7A9CDC96C53B0910A4097273D6EE0E/",
  },
  {
    name: "ToLight TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457356431440378244/6377BC459E9FF10004D61E0AAFD6A813564531F6/",
  },
  {
    name: "Team Sin Compromiso",
    logo: "https://cdn.steamusercontent.com/ugc/11931460677860835904/5E4F7DF61AE794D97F3C11119BB192D71F0C7F78/",
  },
  {
    name: "Saudi Arabia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072107134/6632B8AB7AF84F924C38B4B5C13D91AA27188BFD/",
  },
  {
    name: "FLYING FORTUNE",
    logo: "https://cdn.steamusercontent.com/ugc/1914618053677183905/643B71E4BC0996372029AC8E917018769F378A6F/",
  },
  {
    name: "КритОшибка",
    logo: "https://cdn.steamusercontent.com/ugc/13046538719826816027/8EF36B9FDA07CFAC26481D08F5B9107FA564E129/",
  },
  {
    name: "Elite Eclips",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481000678834385467/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "OG UZOK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264810342766739246/419C02B4454024DD24BE3A927B9143CE2DFE538F/",
  },
  {
    name: "AleXBeT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2071148669692988382/324927397F74A10A53D22BA0FE69C2A489AA8FFE/",
  },
  {
    name: "KIBA arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2439343300092206035/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "5Strangers",
    logo: "https://cdn.steamusercontent.com/ugc/2038492407328886146/698B35D1984E5633566BE8B3D7EC6951E8C153ED/",
  },
  {
    name: "Moonwalkers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446097424529632497/7D798608363051E3C4AA9D1B769E1728B8AFA56D/",
  },
  {
    name: "La Passion",
    logo: "https://cdn.steamusercontent.com/ugc/13330996576888760967/E5324AAB12052C608A34EEC82A096D2B4AC615F8/",
  },
  {
    name: "Фид ФБ и фан",
    logo: "https://cdn.steamusercontent.com/ugc/16798700352026845696/8867A23B69FF8C7B4A15F1FCF704D568661D37DB/",
  },
  {
    name: "Team Rostik",
    logo: "https://cdn.steamusercontent.com/ugc/14989750331369629661/6DCD3B287AF8DC5D0BB5673067CA65EA5AF21F12/",
  },
  {
    name: "Eye Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/14884144452170633934/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Artur Pirozhkov",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2406697281781975482/419FA34B8A57C60C90C38D2B4FBAFCD46C1132BE/",
  },
  {
    name: "Astronaut Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029488469116206882/18F544D6976ACFAE8A98F61491614A7EBE31EEB2/",
  },
  {
    name: "Dominatrix",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2345881890124142330/27EA9658B4E3579D43DBA49A38530A3D26F2AB84/",
  },
  {
    name: "Egypt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336572936/2813A462C8A732EEAB3957BB1A1A575A22B8C929/",
  },
  {
    name: "Tuc Eht",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451718604764286989/DBCD8161274D6944742FFBA79DBB65ECC47CDED6/",
  },
  {
    name: "Chimera",
    logo: "https://cdn.steamusercontent.com/ugc/2309848621114439887/8ED31F55DE112B7F9AEB301FFF8A412A327BB5F3/",
  },
  {
    name: "P2P PG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2143208796878284909/07E386979D49EFDB0B409F0D8E66BFE4621147ED/",
  },
  {
    name: "Chimera",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2309848621114439887/8ED31F55DE112B7F9AEB301FFF8A412A327BB5F3/",
  },
  {
    name: "ARCANE WITCHES",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2548557672169015093/434321650DB72BCE4052D053364346F361F75648/",
  },
  {
    name: "LOS PEPOS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1736675511032384563/376759FC49AAFD3316CA2ABD5AE487F13A775FDE/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/61467525977283077/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Green Pikachu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500134200298322054/607B96B70603E924657CF1D38E9DCED35C022FAB/",
  },
  {
    name: "牢友记",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496762928181435142/BCC555FB966495B395F75F0C7F522E4BEF55D82C/",
  },
  {
    name: "Team Falcons",
    logo: "https://cdn.steamusercontent.com/ugc/2314350571781870059/2B5C9FE9BA0A2DC303A13261444532AA08352843/",
  },
  {
    name: "SAND KING GÓMEZ",
    logo: "https://cdn.steamusercontent.com/ugc/12639506912132829865/3E924727644EB232142644B270FF13455E5A3BC8/",
  },
  {
    name: "Pipsqueak+4",
    logo: "https://cdn.steamusercontent.com/ugc/14017836316804902173/6D59207DB4CBE46D79B9C5007FCD5802858DB860/",
  },
  {
    name: "Kalmychata",
    logo: "https://cdn.steamusercontent.com/ugc/14523818912257802998/398546457D88FDA3C9584EDA3587A5DD0FA1C53C/",
  },
  {
    name: "The Power Guidos",
    logo: "https://cdn.steamusercontent.com/ugc/13861867492929645691/2C9CF0C408A504AA2D34D7124CAE9176FA91FD70/",
  },
  {
    name: "Aurum",
    logo: "https://cdn.steamusercontent.com/ugc/20926246824166900/04FA9B01FA4A1023F2FC50FAB396F1ED6C76F0D0/",
  },
  {
    name: "UpStars",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475370109679095856/F4A379BD3CB8025AEEFBF095E93849C569032E70/",
  },
  {
    name: "LosCHUPAPINGAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1667982787568198542/CF6E335C30D2D43A08394B45968A51022EF2C3AF/",
  },
  {
    name: "Eye Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2492270746261050056/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Pacific Esports",
    logo: "https://cdn.steamusercontent.com/ugc/14638613349000701047/A4029076DE7A72BA187034B87CA3968306C673EC/",
  },
  {
    name: "Manta Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2478749260055361941/F4D1D80AB29862CA0C957DFAD1456CBE98483F27/",
  },
  {
    name: "CrimsonSky",
    logo: "https://cdn.steamusercontent.com/ugc/9869145255454310108/C48D0B6C8A36839BACAC2551931EAAC88B295200/",
  },
  {
    name: "Nethercore ",
    logo: "https://cdn.steamusercontent.com/ugc/9810127761503713360/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "哈尔滨工业大学",
    logo: "https://cdn.steamusercontent.com/ugc/5174885607370331/B0ABA86DF03977DEA2C36385E65CFDD5DDE5EDE6/",
  },
  {
    name: "BB Team",
    logo: "https://cdn.steamusercontent.com/ugc/9872580751363165234/453450F7165E31F40CF6796ABD3F419C01209A9B/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://cdn.steamusercontent.com/ugc/2301966006998536832/291392C9DCF12CA61D67F36BD2DC7802F5D61199/",
  },
  {
    name: "POWER",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2411200881734005485/42C1398610B9EB291CA25780C4C50B73BFD5FC26/",
  },
  {
    name: "The Chapulines",
    logo: "https://cdn.steamusercontent.com/ugc/2504644394417430527/968257F063C9D2831AD83566F4C56E4F1B9BD2B9/",
  },
  {
    name: "SHAOLIN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5097543432692536332/C3EA7D411BF1527BD6E77CB50C7BCBFD971F73B9/",
  },
  {
    name: "Thunder Awaken",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2295213908349975977/C88F0F701B1B451F4275464AEC073DF0C4288FBA/",
  },
  {
    name: "TiltedBoys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2019341966466734644/E0BC1C8BE82595C05440B7461D93CE195CF44A82/",
  },
  {
    name: "Bammysoy",
    logo: "https://cdn.steamusercontent.com/ugc/2298591238452720970/D1327CB4F1C336091246D8A42CEDCCEBB02F56FC/",
  },
  {
    name: "Yellow Submarine",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2506900380361558769/01D7A1FC1156B0550B4EF9EA2A3A2AF84D9BF884/",
  },
  {
    name: "Team Antares",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029469995688767468/C59774140B651ECE73A473EC4D80E2FBE8B2E899/",
  },
  {
    name: "疯狂星期五",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446097424530990638/C9EE72B9B987CA10D71A07E0C7C7AC69ACB7CDC2/",
  },
  {
    name: "Meant 2 Be",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11921410593425269/183747750F5951E2AFEAD74635EBF1AD1AC6C68E/",
  },
  {
    name: "Riyadh Chefs 2.0",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2316605543533779410/861C62272D2BDD066D2AAA86EDA9A4C5FA8EE5FA/",
  },
  {
    name: "Bulgaria",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130918/98672F0937C36EE31A99B0F18BB0E8FB3919724C/",
  },
  {
    name: "YNGBLD",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/10791705643857060/A6E051F0FA010DB0EB642BDA93F8F8C930C87794/",
  },
  {
    name: "AdoNis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2279448944213460001/2A0A9AD742C1FD6D1DF310D65AB7A6E35913F11E/",
  },
  {
    name: "1w Team",
    logo: "https://cdn.steamusercontent.com/ugc/2385306361427679719/DCD7C12478E276346140846AB8EB0B5759351744/",
  },
  {
    name: "Evil Angels ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2363915531090977606/1F200D9E1E48D3FE8016EA6D6B67C1CFCB0CC4E9/",
  },
  {
    name: "Team Spirt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2107180688403245800/D601E24DEF002510F8DE24E66019032D83AB020C/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2012576419677151227/BA62028EABF13253EBF7888A80278ED56A161F0B/",
  },
  {
    name: "Mongolia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130314/88D416D735899BC92221170FFEA76937EC455F29/",
  },
  {
    name: "Acatsuki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441586226180877621/6CEDFAA9DD10809A50C0736DA54EEEFD4A5B107C/",
  },
  {
    name: "Okak",
    logo: "https://cdn.steamusercontent.com/ugc/14821178117164185267/EDBBD130AED6784E41D7D738F0D2457CA0694DD0/",
  },
  {
    name: "Glutomates",
    logo: "https://cdn.steamusercontent.com/ugc/2214143274492082834/FA97BDEA1BA3CFB40797BBB3912D8EBE4DAA3D94/",
  },
  {
    name: "Prodigy of god",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500144980933609854/ABAFF8B8AF274B92478B3692DD1C753CCF51CBD4/",
  },
  {
    name: "4 Zoomers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1602673819877727289/A7BCAD59945257F51E702AEB9CD376A2D186C8B1/",
  },
  {
    name: "TARRASQUE TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2369545214004008146/A71E488C88FF72B97C207CD4928613817C959809/",
  },
  {
    name: "China Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482136923613825716/D90692FE7026EB0683691AF3F3F5D3B36093D0A4/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/2290709938765811788/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "KIba Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492259328558130914/6CC483E414E581A711A416B146FF3D7D5FE1E58B/",
  },
  {
    name: "4Pirates",
    logo: "https://cdn.steamusercontent.com/ugc/40069633524260473/008F97F4B8ABBF94D965990526E8757F1E42E5AE/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2549682039794914775/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "HELLBEAR HEROES",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2504646219095011633/000ACC2A4ADD9D3EBA21A1A4556FCC192415B318/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/53575902101501596/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2453989425923827978/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "V1dar Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485508916101199813/279CC48287C9E96E25003AD95F213895CFA6F430/",
  },
  {
    name: "SKYLINE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481009755937760528/1E5262761A3044EE82EBCC8C9AF6C90E6643A067/",
  },
  {
    name: "G2 x iG",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/5.png",
  },
  {
    name: "Cutlet Lovers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2315480749819360993/59B1C6B20AB31D7F8851C3145186F1281B3E93E6/",
  },
  {
    name: "Illugi",
    logo: "https://cdn.steamusercontent.com/ugc/62596415606236332/AF655AAD32FFD320E4A29AD843DE0BDB728BA033/",
  },
  {
    name: "MantaStyle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2515905365814537208/B7DBABF3CF005A80D851C76E9D0AB4A1C7E3D0B0/",
  },
  {
    name: "Sibe Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2523781268249407312/759C9DF3828E60B672A56F55580D64804FDEE70A/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/16432158187675372/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/6299284121489116/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Mini Aviators",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2259182745971293886/07F36FEAD7CCFDD5AC584DFA157B6A123C8B16CD/",
  },
  {
    name: "180SX",
    logo: "https://cdn.steamusercontent.com/ugc/18245045174599465149/9913EBC23F12D4CA2A9516867503D1378DF537BF/",
  },
  {
    name: "Cross Guils",
    logo: "https://cdn.steamusercontent.com/ugc/15586695007275735197/A6F0B04243CCA972D04F9DA2BF721C7EDD3F707A/",
  },
  {
    name: "twenty minutes to win",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500138005865240659/A066659588850015AF896495E956E5DCCADA8D92/",
  },
  {
    name: "Parallel eSports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1999066441861408614/71D1E68ECD1B5567B1E56F93F8511DB66D829C93/",
  },
  {
    name: "anarchy of miracle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/770607985202212982/EFFE37AA63A1DDE0090A0ACD330280516BF313D3/",
  },
  {
    name: "Love Your Life",
    logo: "https://cdn.steamusercontent.com/ugc/2319979438175363566/771A7032B00CCF3A990204B6D82145B74E515CE3/",
  },
  {
    name: "4Pirates",
    logo: "https://cdn.steamusercontent.com/ugc/40076514758756473/EBE68784DF5B5C3DD7B2033A45A4F79DD819FFB7/",
  },
  {
    name: "CrimsonSky",
    logo: "https://cdn.steamusercontent.com/ugc/2075635690086590897/AE8997D69BAE95D9DEE56EAF662269E793887E3F/",
  },
  {
    name: "One Move",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2429222166861438379/2016A60B73B29A620CFA81A830603361CBB388AD/",
  },
  {
    name: "Free stack",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483261555763089412/C7CE86871EAEC20FF80D88B4E70CAE45CE25306F/",
  },
  {
    name: "Billy's Boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1874056485156530161/054669EEEDFBDFD179362E854A05F26E1DCEF7AC/",
  },
  {
    name: "KUKUYS.Essence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/13049847193844606/C445E37E9F2E3D1D0C7C04246ADD56F02EC80AE1/",
  },
  {
    name: "Team Liquid",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2163.png",
  },
  {
    name: "elegia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461865653129472610/1F0578E360B9B99AD7FCED890CE309663436673D/",
  },
  {
    name: "1stplaceenj",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442719012381761159/D8A6AF84DE249B180A6CD53451EAF563F0980E78/",
  },
  {
    name: "барселона",
    logo: "https://cdn.steamusercontent.com/ugc/10796235327127884/AA68A8E1303A3AD70C0E5833A04117BEEC546C83/",
  },
  {
    name: "KIBA ARMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5067144135193454546/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "ValenTiny",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473119977658518607/386E349C3238B03F4B4404FA1F775BD2285B8B6E/",
  },
  {
    name: "CHEFBRAND TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/16572897410339206714/A6EBCD77AD4DF68D3F968D8DE0846103A19D2959/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/16425010217324501/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "L1GA TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40063200209690390/20B527165E8E637C83F27A62FFE1AE957CB43018/",
  },
  {
    name: "Night Pulse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479883856029444185/44A2207BF5B75CADD5B02860CC3D78333E4E1E76/",
  },
  {
    name: "КомандОЧКА",
    logo: "https://cdn.steamusercontent.com/ugc/12732030226573700063/F8F915E9B4F5516021E821D8ABDC136C559D3578/",
  },
  {
    name: "Dead Denasty",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/52454441369846697/81280A6B18F8869A046EEF35E8C337CCF9EB8A3B/",
  },
  {
    name: "blackmores",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2510271105014219348/E035821222AFD9BB9CE70B979F0CB52A9A5685B4/",
  },
  {
    name: "Team Fist",
    logo: "https://cdn.steamusercontent.com/ugc/2023856976434181992/0855AB7E8B486AC7FB2037C9CD7AF9D8E4FFD346/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/12039384527252376201/316F67C51D538439877450D7A073402423E8B417/",
  },
  {
    name: "Eye Gaming ",
    logo: "https://cdn.steamusercontent.com/ugc/1880842325021945866/AD594D1C59AB23CF8AFD155209D477A382698B1A/",
  },
  {
    name: "KUKUYS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/13045104181371437/C445E37E9F2E3D1D0C7C04246ADD56F02EC80AE1/",
  },
  {
    name: "bubni",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2539537201471924560/B955987FD1E0EF10918F5A9D7DB402937BA47C41/",
  },
  {
    name: "Heroic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471984170520125054/B066431AF4D322D300DD5180CEC8F6BA0E85A7F5/",
  },
  {
    name: "Sustancia X",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/50204544126357822/ADF6F163767D4A5241ADF221C2AAB445BBD1A838/",
  },
  {
    name: "Unholy Amber",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2014828525959384117/4974A687AE421CDC50D79A2C1AB44115BDB3A694/",
  },
  {
    name: "LOS REVENGADORES",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442712301547024588/0189EACBF5D737119A8994108592AA86183687F4/",
  },
  {
    name: "Thunder Awaken",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2295213908345026303/2937ED56C363704CC52D785DB5584947A18DCCAB/",
  },
  {
    name: "Norf",
    logo: "https://cdn.steamusercontent.com/ugc/1658977142544068850/D72A3BDFB1E968578C556900DE6A74491DD9B883/",
  },
  {
    name: "DemiGods",
    logo: "https://cdn.steamusercontent.com/ugc/2109432346272393261/5D02E4493B1E9373C84054C315FA87BCB54A0C66/",
  },
  {
    name: "Night Vision",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460727068613839643/35E9953E42B26F1F51DB7285BA04DC200FC27A76/",
  },
  {
    name: "Teriyaki Boy's",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/20922901787517658/5027F0DD59291E03F0FF9A6DD662974CCEFFF2BA/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493386410232285294/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "HamsterSquad",
    logo: "https://cdn.steamusercontent.com/ugc/14413470522166814195/A570DB08D78FDEE868A1FDC2C2C78785C2FAD792/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2433719947397871957/F4D0AD6C0EFC58DCF8DED009E4D51F25BE2DA05F/",
  },
  {
    name: "The Bridge Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2300843038260171383/D2AC04DCABEA8B2BC539EFC4E784F24E844F6888/",
  },
  {
    name: "M80",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38941270872180974/66B383DCF84EB57927FCAC7F5CE0B6A70D0EDF23/",
  },
  {
    name: "KZ TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/2050878574197691966/63BD4F33584531DD81146CD1BBFF4F7C4BAB6312/",
  },
  {
    name: "Uzumaki ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2548556315386785352/03CAC669361925DB6C641BC3833E78EB78ACC25E/",
  },
  {
    name: "Team Spirt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502396780745087264/DCCE263A1ADD9963F99595BAC3CC77A2A89C9AED/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/9557427424470184183/BD73254A1C9F0B80552DA9EE3C3DEB1C2D05605B/",
  },
  {
    name: "4 Amigos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476496009594397006/08A8957CE77F45BB6A7A43F135C7AD90F4F22EFA/",
  },
  {
    name: "WOLF JOURNEY",
    logo: "https://cdn.steamusercontent.com/ugc/2283950641161604119/1E9B9B685AFDFF1E6D8BCEBACC4C8D0AA6B3D396/",
  },
  {
    name: "Vitality Warriors",
    logo: "https://cdn.steamusercontent.com/ugc/2041868205277029496/6A965540C6EAEB062C4D1DC5E02ECC8209AE3D46/",
  },
  {
    name: "PuckChamp",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11915702531314439/4DA6A4535A1B02E092638D7BBF581E9C89508832/",
  },
  {
    name: "IHC",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2514771532510530932/AA92D7C7649DD3366A31E0E1F772356805B73442/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://cdn.steamusercontent.com/ugc/17457092123820462173/71CA1ED4C091FB9C7AAA22CCA441BDB2870E3BF6/",
  },
  {
    name: "Out Darkness",
    logo: "https://cdn.steamusercontent.com/ugc/2274945577017455376/8AB80E2EE633ADCDA9F9A340C8C170E448C502BF/",
  },
  {
    name: "WelcomeToWb",
    logo: "https://cdn.steamusercontent.com/ugc/51336232659924256/AD201BEAEB1AA6F39CBE7901F0F86B04DF3F21F3/",
  },
  {
    name: "Chompers",
    logo: "https://cdn.steamusercontent.com/ugc/2309851411868349896/31CF1A7CD341B7967F203503A11745F64CAF5B4D/",
  },
  {
    name: "TEAM BEERS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434829473612787327/39D45B33861B80FEAB13B554607EB81B71601E68/",
  },
  {
    name: "Nemiga Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1761446291384253796/DDD9E9CE3AC50467578944F685C4BD84ED0285B7/",
  },
  {
    name: "The Sleepers4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1999071397128980114/DA1CC6766E5E6E32F69001E765D4B4ACCCD46441/",
  },
  {
    name: "NoMatthew",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2438208701509068489/350B89E8E9FB98BF8027B3FCDE4637AA2A15064D/",
  },
  {
    name: "Kobold Youth",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2282829814154727287/A659552B43B0EE0011EBF32A43B17C0A380F151D/",
  },
  {
    name: "NO LIMIT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419082182920046273/F71D76E3E36BE5F8CF2877D2ECE918D0B8ECF607/",
  },
  {
    name: "MCU Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481012926657298288/E660E0B9A902EDE95827E744B8AFC88076FC740C/",
  },
  {
    name: "Chip I Decl",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496764917654950634/3069A0FCC88F30A6CC8902E5AAAF7C4E84D6BE0A/",
  },
  {
    name: "A E A ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/768350028773940695/3E5B47CEAB763CF19E40AE39D3181732B3031C67/",
  },
  {
    name: "Team Yandex",
    logo: "https://cdn.steamusercontent.com/ugc/12970505637628494427/B04C3358F4E815ADFC2F8B1B8BE3AB0CE75C8881/",
  },
  {
    name: "Creative Team",
    logo: "https://cdn.steamusercontent.com/ugc/27687814220075427/52BB82A87F240744C4251CFB611E638F4C2B6348/",
  },
  {
    name: "B8",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485493794725791565/CC82E4B9F79CD7D0C9A1B946D2C2A4E56F9789CA/",
  },
  {
    name: "The Bug",
    logo: "https://cdn.steamusercontent.com/ugc/37824714926951382/B551FEDDDE15341B337766383045A875DC42C47E/",
  },
  {
    name: "Not this Time",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2022722832878669744/4FFFB973F322B0FE99F355F4D9383BAEE77F932D/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/10553757312950244299/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "MarsBet Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2048629496910525034/D8C98865573A293408B8D257E083D05582DDB09B/",
  },
  {
    name: "MOUZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475368207904132788/584A9278F4834E081204E826BBF8A00FFAAD3F99/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2506898018926100512/45E0734610736BEC6A48549F46CB64F13E8C734F/",
  },
  {
    name: "Doa Ibu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2057634697765594112/54C97C3C9C47C43DBC7C70EB73FC549CF49695AF/",
  },
  {
    name: "Not Today",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2291833843199039495/A6A2B19A0B5056875933260810938DC949671FEE/",
  },
  {
    name: "CyberDogs",
    logo: "https://cdn.steamusercontent.com/ugc/2315476805893735485/449EDEC41C4AD6FEB7D3A4B604134EC747486644/",
  },
  {
    name: "LOS FANTASMAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1931509769354207339/EFFF92672891BCE215136E5D650B9EDC94BD6E5B/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2510277446148294540/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483263547314053994/316F67C51D538439877450D7A073402423E8B417/",
  },
  {
    name: "Unknown Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468625490498216687/632AA45AC82B3B835F499E75EC9B95AFD0EFBEFB/",
  },
  {
    name: "V1dar Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2287328638875974112/919F642EEBB4E986EF6F29780B9728CC996E0DAE/",
  },
  {
    name: "Team Zero",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2056502367326800720/6C5E7563DD6EAE44551C2FC33D320AA73315259B/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2526040044857014311/996891188D796FFCE462134517E2FD018C06028C/",
  },
  {
    name: "Sven'Boys",
    logo: "https://cdn.steamusercontent.com/ugc/534014905943095311/EC2266202135120DB835B433521D5992F7A513FF/",
  },
  {
    name: "Блювулька РАДЖ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1690526646633066724/AFF6C2235E14F7397E9B36E28FC00BEE4D4313A4/",
  },
  {
    name: "9Pandas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485502666697365913/234C3E0EDA6A8E315DC78A5EC2C6C1FBB1DD6657/",
  },
  {
    name: "Pikachu Ambiental",
    logo: "https://cdn.steamusercontent.com/ugc/11992061493525901784/D5B3BAFF5BEAC60027F29F23F72826B2244BCCE5/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/55828517337064632/4EFFBEFD25DCAD02F24ED2BFA6A322193DCAEB20/",
  },
  {
    name: "ENVIURENCE",
    logo: "https://cdn.steamusercontent.com/ugc/59218715889225291/8BD9F0216C34AA46DCCE3F875A34A11B2D8799EF/",
  },
  {
    name: "52",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2392061126914863277/C63FDD871CC073842B14C48A87E8215146960B2C/",
  },
  {
    name: "Foxy gaming",
    logo: "https://cdn.steamusercontent.com/ugc/15835594133889566070/D9F2852995D07361029600CFB97DAC1DF653098B/",
  },
  {
    name: "REDLOCK",
    logo: "https://cdn.steamusercontent.com/ugc/13055635877997739/4C86608A77159551AC6F825BF535913424F44E05/",
  },
  {
    name: "ChillGuys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2383056013902113148/DC81538CACFA48D2D03EEBB74D5E5C0EFB09D15D/",
  },
  {
    name: "GRIN Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2001317420616485713/858FEE24286C9D1CDC77AF3D5F3BDAADEB89D2F9/",
  },
  {
    name: "Pukllay Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2224276765868004960/DB0A22849881AC8FD35959A39DE77634E5605D46/",
  },
  {
    name: "Toy Cart",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/42318970590213986/F011BCD3323F40959CB3D39F3613FF9A87BDF4D1/",
  },
  {
    name: "Dream Raiser",
    logo: "https://cdn.steamusercontent.com/ugc/44248960662016375/02B95B415B9F49DD2112102912BFB062D5AC41ED/",
  },
  {
    name: "КОНТРАСНЫЙ ДУШ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2022731800095641255/AAA16E2F2C90E66459B241ACE1AD21750050FD67/",
  },
  {
    name: "Dirt Devils",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2271567091973189195/978E0E96797CA5E20F5E87C9BB43E0003A61AEB6/",
  },
  {
    name: "LGD Gaming",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/15.png",
  },
  {
    name: "Pidzhak Clan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1753561990168051673/02B8AF8B351E4341BC970ACADFD4F7DC792FC893/",
  },
  {
    name: "FALL VICTIMS",
    logo: "https://cdn.steamusercontent.com/ugc/1839182035511443777/DF26E33597EAEB9EBB3F085DA1CA7667E5E11BCB/",
  },
  {
    name: "内蒙古的星空",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264810342756221168/B1E366007C3FD84459693A917B3004FE6299DF78/",
  },
  {
    name: "rezonans",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2068884096232825277/3D37B4960A313E1C4C9E0A76533940B5CFC1E4A7/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459620193691752841/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Call911",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/28805470170231590/97640BB0BB819D3FAE79D44A56B63DE2D98A5E84/",
  },
  {
    name: "GRIN ESports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2280578014288079589/F90266274150C9A8434DB910B1DFC949D46E0595/",
  },
  {
    name: "Fortress Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2200632144662531710/231E8E9375E9719DE71619C9B818D445F99E76A6/",
  },
  {
    name: "France",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072130314/88D416D735899BC92221170FFEA76937EC455F29/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/13042871481198423/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "Super Puper Gamers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5943133124688682640/98FD41E67F78DDE2A02F79955D9A070938493651/",
  },
  {
    name: " Team HaliFFat",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1820012109373038689/B4B17B2A11F6991042A79F316478DB572DB88DC4/",
  },
  {
    name: "Alina boys ",
    logo: "https://cdn.steamusercontent.com/ugc/2162350909943879520/EED5F78D1A75F76AA6712284F862B177B869A6B6/",
  },
  {
    name: "Wap Argentina",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1787445022830947/ACDFA9AE454127F2C294B1911736CDEFCF7D6587/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://cdn.steamusercontent.com/ugc/2473119197018002013/9F54FB2ED4476EA67C55994F5FB7CDAC3B882809/",
  },
  {
    name: "Get  Rekt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/51327907330826161/22450357696F60C637EA389CC9D4FF72A48B1322/",
  },
  {
    name: "tatladderclan",
    logo: "https://cdn.steamusercontent.com/ugc/2457349000339157388/C4F54B5F7603A9B99B4637B981E187FDA1541E32/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8538002808110430/F7B75854544186B0FE27574C3A8C18DB68D0FC89/",
  },
  {
    name: "СТАРЫЙ БОХ ПРАЙМ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459606968861844539/7EA2F772D10643314587E59BF69DD06F3C146EDE/",
  },
  {
    name: "Teiko",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/53576717528430814/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "BeshennayaTamara",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2179239408517184102/1A66484E259A9C13DBA8E4D9E74124610CFFE0BB/",
  },
  {
    name: "5vpotoke",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/6294447757314288/5A8CAF98970CDF32733949741201EB4EBA8236F4/",
  },
  {
    name: "DaPoebatNam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490001101152123651/5889E5E24D2A5CD35762C41E170DECE479E55DC3/",
  },
  {
    name: "4Pirates",
    logo: "https://cdn.steamusercontent.com/ugc/10834512442667354676/453AB19C3F990EA863B82BE5B41D3B19F1DE7A14/",
  },
  {
    name: "Business Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2041874097465563602/35B8C3D831CFD2EF5A19512410C18F1B7F9C460A/",
  },
  {
    name: "Dangerous Fury",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487755008670414946/B972511B7474CC82235C2CDFDA3EA4A17B04B8CF/",
  },
  {
    name: "V1dar Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2294088813186214814/919F642EEBB4E986EF6F29780B9728CC996E0DAE/",
  },
  {
    name: "Team of Super Lobsters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/990136273747040956/4F74C13AAF00901B0C72A7D509FB2B8C6FB8C04A/",
  },
  {
    name: "WWW",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2517032845599862927/2C3A85E38BE3341B708DB19F0780A45C73AB4F3F/",
  },
  {
    name: "Cinder Wolves",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2403321394289590418/ECB73725BE13DFFFA986465B7681F841BACA0B0A/",
  },
  {
    name: "Team Night Fury",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1661224199926148378/90A728087E2B5717EA45FECF9D193624E9F812EE/",
  },
  {
    name: "Swift Knights",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518145430787227449/09843295840179839F2FAF5870B9CBAC09E19911/",
  },
  {
    name: "team_monkeys-",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430327771133612316/7F14A212402D7A2212B8E3A23F45D5670C6ABCF1/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466364897897467068/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Prodigy of God ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2513644999179721052/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "GTN.CLR",
    logo: "https://cdn.steamusercontent.com/ugc/2500138005839434088/87B33C4EC1A6DF482FF7A698FD0F5CDBAF903EC1/",
  },
  {
    name: "copeDAO Kitsune",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298592412797128528/99AA3E2A99E7E457B56B5D740C857CAAA16C7CDD/",
  },
  {
    name: "South Africa",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336573342/1BC9F5FDA2FD8B89AB1EE55181F20C5DF74D18A7/",
  },
  {
    name: "Thunder Fury",
    logo: "https://cdn.steamusercontent.com/ugc/2272693544795408085/0A7F50963EC7751C8E9AEEAE3215C04D483319A5/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://cdn.steamusercontent.com/ugc/26556371895243836/2463CD2FDC05838CACEB66AAE27F597798C40B34/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2546305872362826210/996891188D796FFCE462134517E2FD018C06028C/",
  },
  {
    name: "V V P",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1929257924093785952/9189C3CB68CB69BE1FB5442EF70865F0F8C152E9/",
  },
  {
    name: "Estar Backs",
    logo: "https://cdn.steamusercontent.com/ugc/8546247575522013/0940BE82E218C71369C672C95943445AA450EF45/",
  },
  {
    name: "Lighting Legends",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2350384442452246246/78AD251D0688D17927FD7C7A4F40CB11A30F50BF/",
  },
  {
    name: "Deathcode",
    logo: "https://cdn.steamusercontent.com/ugc/16564597375172499331/048521B38AFD07677E8CA8C42CCAC17685ECCBA5/",
  },
  {
    name: "4 в одном",
    logo: "https://cdn.steamusercontent.com/ugc/9361078289243235106/96C70B1A294103256A435EABA050B85E7F1660F6/",
  },
  {
    name: "Trouble Makers Reborn",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2055376411430850285/0AA4514561187BD14F99FF9898BA4F90B7EE40FC/",
  },
  {
    name: "Канаш СОШ №5",
    logo: "https://cdn.steamusercontent.com/ugc/17349348871018150345/78EA45C129446AAF46BE4C295D115D49191E5082/",
  },
  {
    name: "Chrome Sports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2423588409899801922/EFE0D10A2BDD8E1756F1661448F84B27E4220E86/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/62585168918977929/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Pokoleniye Chudes",
    logo: "https://cdn.steamusercontent.com/ugc/11024357081233892733/E8715468837A1628B2B36A2DC70132C01CA84B44/",
  },
  {
    name: "Team Fable",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2448361194627914299/852D2A16F7796CD862BAA36FF2CB1DED108336D6/",
  },
  {
    name: "Just Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2003573025306283804/2B45DE746F6233F6CB2AC7C128995BF51D6AB0D7/",
  },
  {
    name: "Quantum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2509152814165604364/4E4F7A71A93FD0848B9AB4453186770DA7DEB33B/",
  },
  {
    name: "Team Hryvnia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469740934555677699/19B0497A92F94610E7F60FB2D19614EDCDF636C2/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/34441311447342919/231E40DB1581137118431CF748CAB4E861D27D38/",
  },
  {
    name: "NARKOMANEIS",
    logo: "https://cdn.steamusercontent.com/ugc/2259184687774663609/61AF0806E3BB391E1B92BC25C8A466581040C40A/",
  },
  {
    name: "Bammysoy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2223150865952537702/F84CEFEDEC87B396D43C4524A8A79DCC98AC67BF/",
  },
  {
    name: "Team Sieg",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2322236310862053749/7977152EF305B0C11E570DD95C79A547B0EE9C47/",
  },
  {
    name: "Almas Team",
    logo: "https://cdn.steamusercontent.com/ugc/12416676447808176792/B2C92DB9431FDA2FEF00AB06B0E340DDE8800267/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63708367296168313/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "CAT GIRLS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2380804029703720326/867E496EC30D6D14EC3DFDD4AFEFC2D346AD58C0/",
  },
  {
    name: "MadBecauseBad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/793135197241566323/847F7232365A104AAD933D2319D97055CED46982/",
  },
  {
    name: "TiltedBoys",
    logo: "https://cdn.steamusercontent.com/ugc/2019341966466734644/E0BC1C8BE82595C05440B7461D93CE195CF44A82/",
  },
  {
    name: "Lunar Vibes",
    logo: "https://cdn.steamusercontent.com/ugc/13614201507920283737/BC3F9F10812A718EE45DD10CBA85B2D80B5A13F2/",
  },
  {
    name: "1win",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484374771537877711/915AD14EF64E946E2D48E144154BD0CCDE7C1DD3/",
  },
  {
    name: "СБОРНАЯ ЛЬВОВА",
    logo: "https://cdn.steamusercontent.com/ugc/2055380258361249806/45109020FC5B56BB9BA00642D16302111AC658D2/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/9782203074421085551/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "Lucky Bulldogs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2001335808621483127/5A5F024213E96EFED441218F3DBE395B9C10308C/",
  },
  {
    name: "OTHERS",
    logo: "https://cdn.steamusercontent.com/ugc/61458643626607155/38A49192383ECC5564818F1B0F16CFF2DB32C8AE/",
  },
  {
    name: "PB37RUS37HBZOV14HH88ZVTP3TO7GZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38944911072712561/23EB9EA3FF18EFFB7E6126B9F8C24F3AB773EA0E/",
  },
  {
    name: "Invictus Gaming",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/5.png",
  },
  {
    name: "BetBoom Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2037351993974889309/0C315FDCE88EA888A48EC3C879ED946A4139CC9E/",
  },
  {
    name: "Капибарики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5096417937020940900/F33BFD212F0AA591B30C66C47B4171534FA571B3/",
  },
  {
    name: "NEUTRALES RABIOSOS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2370670296976458075/56AAD9C4970FCD6A8A1321427618114A8E6C68C0/",
  },
  {
    name: "1337old",
    logo: "https://cdn.steamusercontent.com/ugc/2460735398325542260/08C6F29434F4DB3DF66C75B3E38727717305205D/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2459620828424773387/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "ANxJell Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2312097413021810119/ECEEE1A2E40DB8284B850B7A9FDFC422AA060E62/",
  },
  {
    name: "Eye gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2485507648208403255/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Сухарики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2021605898972114805/193C27842A3C703801A495309EC009B11CE01147/",
  },
  {
    name: "Team Pride",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499016717089939134/3705C3F79C9D683F8C8A78D6EFA5330CF05EC14A/",
  },
  {
    name: "Heroic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289583009780888216/EB4A05AADA78EC8F9466B3777F8508CF63CE380E/",
  },
  {
    name: "Just Evil Gods",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2215268843456403326/4E3E1A2C21E509F3B01AA817DFED8B77D9A972AC/",
  },
  {
    name: "Бубновые короли ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484375407156044838/B32475351875C3FBBF08B01C4370F420C919DA8B/",
  },
  {
    name: "...",
    logo: "https://cdn.steamusercontent.com/ugc/12836858123026664015/478811C3B0A249E88D2D96FA9AD0DA7E519EBC8A/",
  },
  {
    name: "DIMA MASLENNIKOWW",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468625490489423183/2D9DA36255E9B79786FADFB8CB7E463F1C679057/",
  },
  {
    name: "Пожилые Гачи",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468608552752065275/850F6C2FAF952A3F1835A097A8373741F7EB4789/",
  },
  {
    name: "Gods of Hell",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457347471760459800/EAC53A5B05C22A782D3E5F85385D6808C2D8A8B0/",
  },
  {
    name: "ARM/Teams",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419083358650543453/4EAB7B63D71B9A7AF67CEB04F9413D9651000858/",
  },
  {
    name: "ETERNITY",
    logo: "https://cdn.steamusercontent.com/ugc/2494520554835502380/7A20EAF76DE33BCB612A3569F0B8264AD0AECFFC/",
  },
  {
    name: "business club",
    logo: "https://cdn.steamusercontent.com/ugc/23180409666352345/130FA56742842E4F9C5CE430C3F515F4C8233AFC/",
  },
  {
    name: "Team Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2037359531662537916/3CEABEF132BB0DC2C1FA8377A93893C2DF99C249/",
  },
  {
    name: "Galáticos da Calangos",
    logo: "https://cdn.steamusercontent.com/ugc/11933863610791516614/A7D234E65846B0AF24B8AE0A66DA953E077C1AED/",
  },
  {
    name: "Aurum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/20926246824166900/04FA9B01FA4A1023F2FC50FAB396F1ED6C76F0D0/",
  },
  {
    name: "Belial Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1678121042186214860/39EDE135A62C1DCCC237B13EEA78A19C940DD1B1/",
  },
  {
    name: "Ace",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2260306743132672587/718B30383AA6FF399AF522C359197C4D94A8D61D/",
  },
  {
    name: "Kiba Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475383427127646926/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "КритОшибка",
    logo: "https://cdn.steamusercontent.com/ugc/10095319097031563637/E6E346BBBD3FA2C9D4187C5208E0CD1114AEE7E1/",
  },
  {
    name: "fire beavers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1979926046523390782/D449E850DC2A83DDA3984B3788DA054AE404E28E/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2529416016899071546/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "PleaseReportTimbersawReborn",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/266101458936360647/F010E498A1066B0A3B0A17323CD9B7D2C98BA0C7/",
  },
  {
    name: "Fly  Rabbit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2195002645144182453/C360493C491C9C4561455DF2BBC3B23A2986B1C2/",
  },
  {
    name: "NAVI Junior",
    logo: "https://cdn.steamusercontent.com/ugc/10986468252407139054/5C6EFC9004093ED29E9B48242DE79418BDDBFE30/",
  },
  {
    name: "AVULUS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484388089175887648/AD2555E0F8E1783B66E6A3F88D0D3481E11BDE2A/",
  },
  {
    name: "Win Came",
    logo: "https://cdn.steamusercontent.com/ugc/630789130674368133/8D9AAB52B70E72B50DB09EC73846BA17749F03F6/",
  },
  {
    name: "grin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/61455298439334125/99C53D71CFB4DFAA9060E1DEAC72BCBBC5741819/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2497900427469091720/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "322gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2030612375849286176/14EDDE9D765BD0724FE53E06FB051B144117B519/",
  },
  {
    name: "С пацанами на велике",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2462996625185331912/0B873C54E28BB91EDCF59908F6390E0ADA888683/",
  },
  {
    name: "CONTABILIDAD Y AUDITORIA ",
    logo: "https://cdn.steamusercontent.com/ugc/2371796196867415021/A73E5AA60702DA28B04DD83E2829C02D91604656/",
  },
  {
    name: "ODIUM",
    logo: "https://cdn.steamusercontent.com/ugc/12478431894210989755/87E45A0F2303C47F0F08BC1377DD3B3162FFECE9/",
  },
  {
    name: "羊村",
    logo: "https://cdn.steamusercontent.com/ugc/40846645171238724/F5F4C07807EB609CF4D0213D44D7936DF93BCC53/",
  },
  {
    name: "One Move",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2478759223866186193/2016A60B73B29A620CFA81A830603361CBB388AD/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/15301647012547687/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485508282145075491/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "SÖLAN E-Sports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1610554771280220402/98194A3F4CF58384BA688408CA4F80C1AADB2503/",
  },
  {
    name: "Yagodki Prime",
    logo: "https://cdn.steamusercontent.com/ugc/45695418176330218/4C54522A2F96C6A9BF46098C9FEDD58B16F57DA4/",
  },
  {
    name: "Eternal will",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1854917545749204806/3DAAAC7EF81AE9CFCDE15BF7D880E1437AA73D8F/",
  },
  {
    name: "Dame tus Moneditas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/866233156519569288/ED7AE93582035B4C0858E4801699170A4EA695A5/",
  },
  {
    name: "TEAM BEZDAR",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/769481154126851590/F2481F729A07A985CB03AFBC5F547D6441D4846F/",
  },
  {
    name: "PERRO NEGRO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/36688218920991934/D6B20C5E7512943967F3005063A26A32F409B46D/",
  },
  {
    name: "The Nexus Knights",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547430415512591120/1658FAA5762B8EECDC7F9D86DA49CC3CA3681818/",
  },
  {
    name: "KrisTina",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5965651201344585161/B15805DD5F20909C252530546D1DE1E3D4F67E33/",
  },
  {
    name: "MYM",
    logo: "https://cdn.steamusercontent.com/ugc/784124162970010969/96F5645CF449B021C599ADC02727343652C35162/",
  },
  {
    name: "Yangzhiganlu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2224276042704422213/008833949AD3544697322138136E7FA81EA5EC4C/",
  },
  {
    name: "Alliance",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/111474.png",
  },
  {
    name: "Moodeng Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/32190145604852109/E7EE05A8819599AA60D6901AAED6F99225A0C06B/",
  },
  {
    name: "ESTAR_BACKS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2247920665251197227/5D236EEB62190F9B0FC6F25BDA98DDB3EB6A5F0A/",
  },
  {
    name: "Invictus Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494521188338032119/18993A45DC9935A63B0C0DFE51305B62675B2A88/",
  },
  {
    name: "TiltedBoys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479880051606613408/E0BC1C8BE82595C05440B7461D93CE195CF44A82/",
  },
  {
    name: "RAGE_",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/773990777249837243/BE8348593D8400E7D4A4B058914D168A5B1A5013/",
  },
  {
    name: "Trust Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501261538274115301/E58647C0DA6B9A4F50D73244C300C904FD66BE95/",
  },
  {
    name: "bungee gum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508034524415506491/C121C84138C97A990F969AE84E43D9FF96DAFBDA/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2497892547190342389/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Thunder Jumanji",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63711481632171251/59C05B89E58A75DFC79DC54ED1A6A26D574099B1/",
  },
  {
    name: "100MMR",
    logo: "https://cdn.steamusercontent.com/ugc/16830255701840613626/E0D867F3B960F835DD41F2A6F9649A206211BC1F/",
  },
  {
    name: "TopTab",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2377426513731442898/BE1CC23FE03490C7401A8D81B9C301DA6CB07ED7/",
  },
  {
    name: "NobodyYesDoor",
    logo: "https://cdn.steamusercontent.com/ugc/924802370378873936/F7C558759D54250406AAFBCDE41EA14D82E25B14/",
  },
  {
    name: "Dudley Boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493388578736275588/E67DA7172914CBAD91AB16E91CC7BA4F04ADD157/",
  },
  {
    name: "RBB GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469752024637000519/246BD2DD98742EE17F71617974E97B20C4F974E4/",
  },
  {
    name: "Cyber Reqeedrs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483264726473068044/C8A0ACE563551D90A91EEE1351AB09B3BE88FC31/",
  },
  {
    name: "HunterZ",
    logo: "https://cdn.steamusercontent.com/ugc/12589882806293413453/9AFBE459FCBD8CB12DE2BA3EAE79C33827256701/",
  },
  {
    name: "PAREDÃO Rejects",
    logo: "https://cdn.steamusercontent.com/ugc/17619831537501154494/66055BE0FE2AB49CE07B017FA4382504B6F2057A/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2521537992139078627/E228DDF5F2F0AB670945CC00351F32BB2644ABDA/",
  },
  {
    name: "ChristoFire",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2379676227935402822/772E8347962BC6B89E25FD5643B2819496E32650/",
  },
  {
    name: "REKONIX",
    logo: "https://cdn.steamusercontent.com/ugc/11355629394521403023/64ED14E0D7C327ACB85D1CCD5105EBD30D31B0B3/",
  },
  {
    name: "Báilalo Rocky",
    logo: "https://cdn.steamusercontent.com/ugc/20937484294765334/88537F72F45B26B0F56DC85C2A75C756C30BEB62/",
  },
  {
    name: "Progress Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/786376294937092437/77C551A8A7E7A51FEC59DAD5684D4045AD8A79CD/",
  },
  {
    name: "White Ice",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8544435822977835/9DA99CA8141E723614A0584693994D1903DA4A01/",
  },
  {
    name: "InmortalClass",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2015976399447514533/F1893C990822F076B0351071DC8F208A6B9E924F/",
  },
  {
    name: "Tambov",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2551934624851760241/C175F27AFCFAF15BE19D490EE417B4FF397833C4/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497900427469359383/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "Wiser Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477632689738982294/52F73BED281DF75257007811CA9CDF5144CB2B1F/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2411202693609694073/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Air Defence",
    logo: "https://cdn.steamusercontent.com/ugc/33309069800276591/B735C35337F59604BC717BC7E2FDFC3B09080C6D/",
  },
  {
    name: "Midas Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1023949891346003477/5818E876A49B28A109554B22D000935324B6FBFA/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2376299796522859727/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Black King Bar-Off",
    logo: "https://cdn.steamusercontent.com/ugc/15417841748381281403/3977C501A63B0917D68C694F2704E3DA2B5682E7/",
  },
  {
    name: "manta style squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2301969478619433879/700A33F3F625ABFFCA3A339E58D23E1107677461/",
  },
  {
    name: "RMS | ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458491757827596384/9146365A14A62B77E5C9B825D2140D89E3C91D64/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468627392935509313/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Pacific ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2061004359251374062/DF9E1906C3CF1D9DBBB0EB962A7AA3A996B82EE3/",
  },
  {
    name: "Elite Eclipse ",
    logo: "https://cdn.steamusercontent.com/ugc/2459620193691451715/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "FalconBlade",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1912360152041070362/C53EF11004864FEB1E66AC10A9BB4FBD7A023A77/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/11244308908235797269/316F67C51D538439877450D7A073402423E8B417/",
  },
  {
    name: "Fast n' Furion",
    logo: "https://cdn.steamusercontent.com/ugc/946211252062227294/8B85652FE2A0EDA448CEC0F2CA737F36C811D379/",
  },
  {
    name: "Team Amplify",
    logo: "https://cdn.steamusercontent.com/ugc/49083714006553058/B11A2447742F99F714D6749EDF14869F2C4AC259/",
  },
  {
    name: "Sixpence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501263905745040196/E225355C0C0A3217248DF151F1E6B815467CE7F8/",
  },
  {
    name: "Team Morphilina",
    logo: "https://cdn.steamusercontent.com/ugc/15203406281749900686/02472932CEFEFEE120ECF90E8287B9D2D8D71472/",
  },
  {
    name: "Moonwalkers",
    logo: "https://cdn.steamusercontent.com/ugc/2446097424529632497/7D798608363051E3C4AA9D1B769E1728B8AFA56D/",
  },
  {
    name: "porki4",
    logo: "https://cdn.steamusercontent.com/ugc/2106052996910381453/F54C7A528EE86479D6806C059519C5229121DC52/",
  },
  {
    name: "V1dar Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2287328638875974112/919F642EEBB4E986EF6F29780B9728CC996E0DAE/",
  },
  {
    name: "Rodnoc Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1643214823204767205/B66AAE81E98601C5E206053A495E2F802CA9CAAB/",
  },
  {
    name: "Nilfgaard",
    logo: "https://cdn.steamusercontent.com/ugc/62592609842133076/B984C631394AB6814AF588615D24D1A26B3DFD30/",
  },
  {
    name: "United States ",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072131070/81FFEF4306F850C6D0A3E9A239DF070520BDB1F9/",
  },
  {
    name: "Cybersport 4ipiki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2079031146380764630/FC5406CE71C3748A79872FF37E742BD94689228D/",
  },
  {
    name: "МГАФК 2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2112808396453446271/2DB78639ED66A80A6EA5143D4FF028ABA1042204/",
  },
  {
    name: "Kyrgyzstan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336570911/9472FD04C64FEB5A256B7D23BD497D482B08FD64/",
  },
  {
    name: "Clan Uzumaki",
    logo: "https://cdn.steamusercontent.com/ugc/2258058843065023480/721C13269A647EF80CD05D65B8E8952709FFE25D/",
  },
  {
    name: "Team Spirit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1839179120711951766/CD7E0885CB527334205CC7885E9C101B7BC17702/",
  },
  {
    name: "Play for Fun",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503529021823838530/28113541EE2ACBA2A2A253067487EB0ED0A29323/",
  },
  {
    name: "Team Tidebound",
    logo: "https://cdn.steamusercontent.com/ugc/12094940740270677482/9AD05F0A80A562EE4A833375BF1783B52B3D4C30/",
  },
  {
    name: "Bright Crusaders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1898855551945525392/1DB70894416C865659F1417EC6330B6DE78470F9/",
  },
  {
    name: "Team Bald Reborn",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1771579475955883553/F0DFC828EF7F028C61C909BB842A0C67E5C82078/",
  },
  {
    name: "Passion UA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503530623725723229/672D6BE0D568AE5E7BC8494F05683207DCA9E28E/",
  },
  {
    name: "Nameless Boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2198379706959075512/F6E504D92580B96DC149543B09384137C6CA886F/",
  },
  {
    name: "Wкилеты",
    logo: "https://cdn.steamusercontent.com/ugc/46831914176062568/4E58A6A92AD6A5A18920D130A7213C2DB85636F9/",
  },
  {
    name: "PixelPanda",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505772116874082257/89B4B4D168EF191971FDE75960356F407FC6EF98/",
  },
  {
    name: "Pacific ",
    logo: "https://cdn.steamusercontent.com/ugc/2421319307290243710/2D572643B2BDCCFDA346E9AB51833351BF8CE35E/",
  },
  {
    name: "VERTEX PACK",
    logo: "https://cdn.steamusercontent.com/ugc/2047503411652997007/08F27DE9B0F0C1AB4C669A5785486AAA77E8917C/",
  },
  {
    name: "MarsBet Team",
    logo: "https://cdn.steamusercontent.com/ugc/2048629496910525034/D8C98865573A293408B8D257E083D05582DDB09B/",
  },
  {
    name: "TL",
    logo: "https://cdn.steamusercontent.com/ugc/17939313120301512527/E83F4209FB33EE2CA0385BCB23918A6D360D855C/",
  },
  {
    name: "哈哈先生",
    logo: "https://cdn.steamusercontent.com/ugc/9666272728095801838/BB4DE2D87891D909F89C1C3D85B3DF11C2E8D8AD/",
  },
  {
    name: "Young Blood",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1924742910754255214/B9CF934FDA0F79B28DD95566EE168EE480D1506E/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503523314621656814/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "FenixTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2309848241691039928/369B45B6067BA807581F7C454D69D02416456FD7/",
  },
  {
    name: "RIKOC's Servants",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456242493953103220/47959FE5B99B0DDED7645A44EA67BD0A9068110B/",
  },
  {
    name: "BENZ",
    logo: "https://cdn.steamusercontent.com/ugc/10920999933752121658/5631204CE460D0717AEC786480750C17C3065E0F/",
  },
  {
    name: "HIPPOMEN",
    logo: "https://cdn.steamusercontent.com/ugc/45706014290830594/3432DF9EE4ECCEDB40353F41930F6063FB284689/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2374048813992649302/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "Stereophonics",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2336873643528563746/DBD2FEC72B30381C07121B1904919A862779DA09/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2386432261337001246/B454BEA3898446DFA0101B4577440B9AD466F0CA/",
  },
  {
    name: "Team Prism",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2372920193477134075/74D2F35684F2884DA5DEF27B81D950C6A523195E/",
  },
  {
    name: "SVINUSHKI",
    logo: "https://cdn.steamusercontent.com/ugc/2448362707414393564/829ACAEA982B37509A19E516B18123CA9743052E/",
  },
  {
    name: "EYE GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/2487761350958509664/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "ProfGameTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2268189945226927049/876C8EF6AE88B4E63D85172FEC7AED09360D2432/",
  },
  {
    name: "Team Storm ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505779553914601503/83437C5760C1B85EFD8E4A0A09ECFF6DC85C994D/",
  },
  {
    name: "BOOM Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/768365068750604173/EF3216F4B02A0DA2327AC3190A369349C7BF3A24/",
  },
  {
    name: "Restart Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446095530989908312/C16AEDC043748CBCE4E0D5C1AE4BFFAFD3E11C53/",
  },
  {
    name: "Ninja Penguins",
    logo: "https://cdn.steamusercontent.com/ugc/2321110410943510446/9E5FCD7F361FE09E5F98520D435ECF6642680AEC/",
  },
  {
    name: "BB Team",
    logo: "https://cdn.steamusercontent.com/ugc/9995426432403529725/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "DCPGG",
    logo: "https://cdn.steamusercontent.com/ugc/15843031031743599441/4128F2A3BD081D26DF5F395293F0262E5CEF0142/",
  },
  {
    name: "bigguccisosa",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467489443832466814/F3C3342C3CCB7C1734A9CE78182C8EDC7E659A78/",
  },
  {
    name: "ЧВК ПЕРМСКИЙ ХОМЯК",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2433718881124315416/799AFB8869460BC6BFFDDFFF661FD3A859977C1A/",
  },
  {
    name: "like.beast",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2438207805864041056/CB8D36367CFE4E27FCBD2E80B3AFB8C5C575B6DB/",
  },
  {
    name: "charonchik",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483241994927562822/8CBB995376A6754BA9BCAC11B0021A445389EAC4/",
  },
  {
    name: "Onça Dourada",
    logo: "https://cdn.steamusercontent.com/ugc/16599677834337322936/88F4A2C31B58E4E78196C0D3662E47BD60967A4A/",
  },
  {
    name: "Next Season Please",
    logo: "https://cdn.steamusercontent.com/ugc/12558779500125614363/D5826D5D93E91752812E817C3057E8064F5BD7D3/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/53576717528430814/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Папы из Дели",
    logo: "https://cdn.steamusercontent.com/ugc/9384771929255781980/4BD053D1ECC0A0B04EAE0BB1C0DD349F3049EE9E/",
  },
  {
    name: "DEVANGEL +4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/939446378122452229/A03E18104257F8452D10BA73CB46CCB5DB624C9D/",
  },
  {
    name: "Team Kukuys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495646454751623231/64BE465662BBDCBF2128F93AC1BFCB0B8C6E15AF/",
  },
  {
    name: "DerzhaWIN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2046368633517487595/3F9239393EDFBB06A8604E00E9B5BC43E5D368EB/",
  },
  {
    name: "Tiririca Club",
    logo: "https://cdn.steamusercontent.com/ugc/10913416543964859230/EB3AFB3B7199B1210A0B89921ACAFC1614120244/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/55825798897929424/76CAF13C890C3FEBA92E152739F02C769865B286/",
  },
  {
    name: "Snoopers TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/15174063370904302739/8E262CC4A092454E916FBC2A33CF1BDCCECD3846/",
  },
  {
    name: "SIGIZMUNDI",
    logo: "https://cdn.steamusercontent.com/ugc/60335831197062001/66EB9C79665AA4F4F563BE166DEF6D0D94480D9C/",
  },
  {
    name: "Palianytsia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2372922730354514698/E0FEC0B60EBC78F79DF08BFB7C1299193CD635BE/",
  },
  {
    name: "Nemesis Curse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264814781711580117/F391A5A86D4535FDE243A4D27F1F263B2D385409/",
  },
  {
    name: "1win",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518156842406130915/763C70A18C2DC8287E123AFF0F927295FCA3900E/",
  },
  {
    name: "tatladderclan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457349000339157388/C4F54B5F7603A9B99B4637B981E187FDA1541E32/",
  },
  {
    name: "TEAM DERROTA",
    logo: "https://cdn.steamusercontent.com/ugc/1696151972771757301/475CD960166371B5AF9A73C23396A15D4B0F9909/",
  },
  {
    name: "Nem Noé Carrega Tanto Animal",
    logo: "https://cdn.steamusercontent.com/ugc/12741674384035148384/71D2F1593F20587C40BCFAE0CACCC5A3F276D419/",
  },
  {
    name: "TRENDISTITE",
    logo: "https://cdn.steamusercontent.com/ugc/62594053387938389/7C786F348E219F908F1BB14EB18778E409BAD9FD/",
  },
  {
    name: "One Move",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2328992979091285963/2BCF5FB3EB72A3860D7B568FA0A1FD54FDC486FD/",
  },
  {
    name: "OTHERS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/61458643626607155/38A49192383ECC5564818F1B0F16CFF2DB32C8AE/",
  },
  {
    name: "Elite Eclipse ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459620193691451715/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Stray kids",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490003713537019779/2F8C7D1CC8FA74C967CFBD41775185193FC4A862/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500152590314943726/76CAF13C890C3FEBA92E152739F02C769865B286/",
  },
  {
    name: "DVT банда",
    logo: "https://cdn.steamusercontent.com/ugc/17556699327133829/47D3FBBF56587FA81053D2DBE366E6BF22D8E5AE/",
  },
  {
    name: "барселона",
    logo: "https://cdn.steamusercontent.com/ugc/15180786815473379955/E12782A5EEBD40132C03D9205E8A796A6DC6A701/",
  },
  {
    name: "Execration",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2024966396057134788/4EE29568BB91ECB5E77FC61824B6264789485060/",
  },
  {
    name: "Sunset",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/350190.png",
  },
  {
    name: "Palmolive",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500152227284135882/3CB2A4FEA2CED4FE2CB0DE2AB135539324EE88FF/",
  },
  {
    name: "20Twice",
    logo: "https://cdn.steamusercontent.com/ugc/17289661118767632781/A02DFF0BC1784C8C9D81D76CECF5AA1741CEA722/",
  },
  {
    name: "Team Flamingos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/7412825351657686/89737D28B0A98941DA5AE80B8906AC26DEAB3D1B/",
  },
  {
    name: "Dulo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11923313300355035/A92AADCCA9335121662EB759E8665730D496F67E/",
  },
  {
    name: "Jabberwook",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464103503743246885/6E3A04E7D21B633CE49A12996638F13FCB4341E4/",
  },
  {
    name: "beastcoast",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2008072595679478968/A080A63C70A5DEA039FBC1AE798EE2570E194606/",
  },
  {
    name: "Children of Roshan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1753561829217337309/CE6AF46A19DD9A4A858A97627DF323F31611E58A/",
  },
  {
    name: "winter esports ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497893181093558579/4DFCAC43823C66149B35A77D763AF97791BEF524/",
  },
  {
    name: "Wild Dragon",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1990057787343993118/C66F122401961BB0D2BFAE0FA3E17D4D8B741B8B/",
  },
  {
    name: "Team Again",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2269318381301998804/89DC454B5E8FF5174A6444E52327D89CC951D63D/",
  },
  {
    name: "LOS 3 CHOCLITOS ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2386432895667845450/3888BA6DAA086C67D8CA850BBCF3F55B33F854E4/",
  },
  {
    name: "Salvation Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5970154800985346024/DC78EF1BA500CF4791BDDE81A03538E2F5D990EA/",
  },
  {
    name: "CUMbainer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1464184778775083717/B6D0EBF8F064C2166F200A9B9509CF0B70355926/",
  },
  {
    name: "Lunar Vibes",
    logo: "https://cdn.steamusercontent.com/ugc/17496570273790358715/BC3F9F10812A718EE45DD10CBA85B2D80B5A13F2/",
  },
  {
    name: "StormSquad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11920957425983581/20ADE542BECD5E533C7E8FDB81540CAC425C5F93/",
  },
  {
    name: "Сухарики",
    logo: "https://cdn.steamusercontent.com/ugc/2021605898972114805/193C27842A3C703801A495309EC009B11CE01147/",
  },
  {
    name: "ThunderLab",
    logo: "https://cdn.steamusercontent.com/ugc/36695648652250472/846E8D7A392F7933FE768774A2A8C7C2787BE388/",
  },
  {
    name: "усярды",
    logo: "https://cdn.steamusercontent.com/ugc/2348133056884843795/F9297C2D2578857640E5BDD66150801779BB60E0/",
  },
  {
    name: "意念合一",
    logo: "https://cdn.steamusercontent.com/ugc/1908988554143224208/2A92A8E138E2A65444F34FF6FBE09C204CF65B24/",
  },
  {
    name: "Griefindor.Bastards",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456241225738517925/53012A78AF1413E360EF4C00D76106B7509C7527/",
  },
  {
    name: "Teamless",
    logo: "https://cdn.steamusercontent.com/ugc/37817833697649139/E43DEC695C547D8F319E7F1434F428947826DA4A/",
  },
  {
    name: "Party 2 play",
    logo: "https://cdn.steamusercontent.com/ugc/22050704706470085/4CC18E87912231150E046F6C4F43B7446ACD0E91/",
  },
  {
    name: "Vicious Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464121257358370613/50DB5F40E7D2B456A853536A6FCC6FD9D1719EFB/",
  },
  {
    name: "DIV2 Lil Nouns",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2363895241303534335/72A1C3CBCFC7DC31B556947F97A76BFCDB6E01D6/",
  },
  {
    name: "BloodyRose",
    logo: "https://cdn.steamusercontent.com/ugc/16432158180639972/2A7A8AF97F83D018A54851B82EEEDAB1B10FCA52/",
  },
  {
    name: "BLUE PIKACHU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1172572644782527474/C93CE3E91A0F9B46987706BBBFFFCC7576D4196F/",
  },
  {
    name: "nocylinder",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487766423132354378/48E7C4330BB98FA487CC0E14C069B131DBC83A17/",
  },
  {
    name: "Mine GG Soo BiGggggg！",
    logo: "https://cdn.steamusercontent.com/ugc/19811035317226961/C11C889FDD6BAE16C5943EAFD05E53E70679C823/",
  },
  {
    name: "Alpine Draft",
    logo: "https://cdn.steamusercontent.com/ugc/16359807747731448155/F1F7A77E5C61971CB31A6374970138F55175D2F2/",
  },
  {
    name: "TheLadiesLove",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2061003429709757308/42DD00E27CB2F43BD0D20D7902237DADF5A9AEE7/",
  },
  {
    name: "Дима Чижмаков",
    logo: "https://cdn.steamusercontent.com/ugc/2296339440141880586/6873051D38015212468DDF62D08F41ED6E5BD2F7/",
  },
  {
    name: "Passion UA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5960021623319385517/D24A73F720EFE606E79D45631EBCD67D2F3D2568/",
  },
  {
    name: "MOPSYARKI",
    logo: "https://cdn.steamusercontent.com/ugc/17244929753471175300/A44EEBAE24A09E9E1ECA4F0EE73938F2DBCE9AD6/",
  },
  {
    name: "Chompers X",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2309851411868349896/31CF1A7CD341B7967F203503A11745F64CAF5B4D/",
  },
  {
    name: "KZ TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2050878574197691966/63BD4F33584531DD81146CD1BBFF4F7C4BAB6312/",
  },
  {
    name: "4FUN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466364897885275288/2C3DF9289B16644C02707167AD7C590F9DD4D256/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5969028901072172122/A820673D9861D5E452DB92338F1847CE1EDAF813/",
  },
  {
    name: "gazovatorbl",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8544435822675099/0B0CCE2F22F4721912B21D9805F015116E57583C/",
  },
  {
    name: "Night Pulse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2421319307290271820/660CC000FEC07CD74EF48FDC93A5C3355FCA7D02/",
  },
  {
    name: "5vpotoke",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/6288921437380869/5A8CAF98970CDF32733949741201EB4EBA8236F4/",
  },
  {
    name: "xdxdxd",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2447221978184486323/2BA394D2ED0449306E3CB8E36914349712B0036D/",
  },
  {
    name: "Business Club",
    logo: "https://cdn.steamusercontent.com/ugc/13043505443697882/130FA56742842E4F9C5CE430C3F515F4C8233AFC/",
  },
  {
    name: "Viejitos Calientes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2415706293230715151/53C1E943F0F3440C76B1DF02A56E05BCE0A9AF26/",
  },
  {
    name: "barsa",
    logo: "https://cdn.steamusercontent.com/ugc/10796235327127884/AA68A8E1303A3AD70C0E5833A04117BEEC546C83/",
  },
  {
    name: "Team Aster",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1629730253163462144/FEF15B2B4528E81103DD693E37FD7B6C9BE6B471/",
  },
  {
    name: "Rakuzan",
    logo: "https://cdn.steamusercontent.com/ugc/13042871481198423/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "Cyber Goose",
    logo: "https://cdn.steamusercontent.com/ugc/10211157587642124035/8782DBD433A137EAC11039A8B5F60DB1304A971C/",
  },
  {
    name: "Mrusni Pari Chisti Ruce",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482136289367946319/7086A96F52F0CC087B6417E15103994F4A00A134/",
  },
  {
    name: "YodiBrodi Nexus Future",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2217520643255336308/6E456F96913CB97E109B7676E931994A786BDDFD/",
  },
  {
    name: "forbidden psychology",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481009755938341758/6D5D90027792796CF8AAFA176505F4F2F79AD8C4/",
  },
  {
    name: "L1GA TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2301967354056999004/B90BEF29396C07620B31240CFC5CA326B0EAC2A4/",
  },
  {
    name: "Los Magikarps",
    logo: "https://cdn.steamusercontent.com/ugc/823441571252987467/9EB7D35004E589C1E33E2C3D51B4ECC6BB2D056F/",
  },
  {
    name: "Team Lotus ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467488176507453485/AA8BEE3964987A6664C810F80DB21CF25600B6C1/",
  },
  {
    name: "Wild Dragon",
    logo: "https://cdn.steamusercontent.com/ugc/1990057787343993118/C66F122401961BB0D2BFAE0FA3E17D4D8B741B8B/",
  },
  {
    name: "TEAM OSX",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477627616763644385/79C05A185FBBC30353A86F4BD3DE23DC09D7558B/",
  },
  {
    name: "Marvelous Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2152217176212751406/08ACDA39A18F8336DF6782B6D64A148F906D7278/",
  },
  {
    name: "Cuyes e-Sports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499012826582236771/CFDA1E083BBE8D65AF615F5E73A4E193BA38B0C0/",
  },
  {
    name: "ЧЕМПИОНЫ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477628251812513834/0B21DD83BBA5C7B5C168B6D8D67C80D21321CEF5/",
  },
  {
    name: "Team Shanghao",
    logo: "https://cdn.steamusercontent.com/ugc/2403320759936790380/DDBC726349EB038130E42E363F7A8766D02824F6/",
  },
  {
    name: "The MongolZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431473966680677209/9F562CA4B4466BCA414B33046BDE07CC4B2255FC/",
  },
  {
    name: "Vrooomy.io",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503520317052255468/D733627DDB8629A170986E0132156803032094BF/",
  },
  {
    name: "O.O",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1826778837139420035/129AA10C998D079ACDCBDF9C28AEC570F87946CD/",
  },
  {
    name: "Fusion Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493385958835739929/9CC05B3155D1BCFCA81C38646704908E57450C0C/",
  },
  {
    name: "HIT Natz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1771582000000253270/07A6BFBED1C1689BDEC9867353FACABA73687028/",
  },
  {
    name: "AU REJECTS",
    logo: "https://cdn.steamusercontent.com/ugc/45692699737913632/BAADD0F1D198ABB748A9CE6B76B7FB3BB91F7961/",
  },
  {
    name: "El dedo de PNKZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452862891785630203/84B6B2CE9910441E54980EAD2337507C2CD177AC/",
  },
  {
    name: "Team Tickles",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2056510796283092608/8B9AE4B1B129EBBCE213FE917D4B22478B087870/",
  },
  {
    name: "0FFN1K1 Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2200632144679626242/A2F081035C2FC22A8CA5AE535155E17363BEB747/",
  },
  {
    name: "Dragon Esports Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497890644083417999/9CC264EFBF36FA7E9ABA44A34EB6A8D0B8B82DF9/",
  },
  {
    name: "nocturnal 谷schizophrenics谷",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/832512818118149681/355D3CAF00E19F48683798EDA6DAD131C6D93AE7/",
  },
  {
    name: "Westrix Team",
    logo: "https://cdn.steamusercontent.com/ugc/13072336213255416651/4A9D1DB8CD91B750E35394FD49A682F1F0EFA5DA/",
  },
  {
    name: "Mean It",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2317732711197785807/F55FC09ADD85C56B2CA707F74B248B7C50AFBEE7/",
  },
  {
    name: "Scammers",
    logo: "https://cdn.steamusercontent.com/ugc/11345917547210646130/F0AC79F487103E32B7AD3ABA26A94A3D24742428/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456239958004431725/E228DDF5F2F0AB670945CC00351F32BB2644ABDA/",
  },
  {
    name: "Ninja Bros",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2520402300695939481/4459E23D624747A3B0F3A02A8CA372EC53C13A73/",
  },
  {
    name: "HUNGRY DRAGONS",
    logo: "https://cdn.steamusercontent.com/ugc/18428008304735160687/7F32DAA461B52153790AEF72CDA65259521FAE5C/",
  },
  {
    name: "Stray Cats",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2314349938646126982/5CB79F5A11BBA6DCC3D31AE0E15D862BD86C5839/",
  },
  {
    name: "Ammunition Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484382382210434467/D08C3FC994A2F88446380AC489EB1F322F64CB65/",
  },
  {
    name: "Спортики",
    logo: "https://cdn.steamusercontent.com/ugc/10616485898780340571/F677F118D961506E979C324A73F2427787C613CE/",
  },
  {
    name: "B1488",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485493794725791565/CC82E4B9F79CD7D0C9A1B946D2C2A4E56F9789CA/",
  },
  {
    name: "Air Defence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33309069800276591/B735C35337F59604BC717BC7E2FDFC3B09080C6D/",
  },
  {
    name: "HolyTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2045232594440611734/6C72924B50012D14EB63CB93471A3CE174EF4DE2/",
  },
  {
    name: "Team Tough",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298586614153129772/34892DA3BE31B7E7E9E4BED828EB54B3A055388A/",
  },
  {
    name: "BernaEnoyers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1932625476442680237/B42D3690C82B0365CF199E7BE919BD85FAB2AF94/",
  },
  {
    name: "KICKYUTA",
    logo: "https://cdn.steamusercontent.com/ugc/40068908267057728/D39B7E9A52E8BCE7B9C5B3E6A8E87B8B4093130E/",
  },
  {
    name: "wraith band up",
    logo: "https://cdn.steamusercontent.com/ugc/2031734816236482893/A91A1C60B9D75BEF2BD0008E03D360DB3F1604E3/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/13052583762130971/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "ПМЖ на фонтане ",
    logo: "https://cdn.steamusercontent.com/ugc/16664091930168955702/0090CE2328B3653A3DF0A1FAD589092F8A13CE50/",
  },
  {
    name: "tam_sme",
    logo: "https://cdn.steamusercontent.com/ugc/1830165414580693025/0490CB1A1C9A39BE4735653CDA9DF8270BE26CB8/",
  },
  {
    name: "Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2402193683071984524/18EAD89BC5582B158DE54E0D719605731B3196F8/",
  },
  {
    name: "BY_OWL TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/15277638629861202753/C7FC66938F0A940BEC26BA53747973404A709511/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1797522561529266178/C451F5F544B99C6AEBC05E004237F7A98253AA79/",
  },
  {
    name: "ryodan ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2512527516301115582/3EA737971C1AD2299A2BE915609431538EBEC88F/",
  },
  {
    name: "NAVI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/876374179350406670/F91E948DB27F60F82DA8913ADE468F9182473444/",
  },
  {
    name: "BB Team",
    logo: "https://cdn.steamusercontent.com/ugc/9393895253468454856/41CF4EBEB359259E56E03AECEF6A7606CF0A076F/",
  },
  {
    name: "Team Filipp Kirkorov",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/911294436550982132/2265FA37319325189AF5039C34D03AB20E571E99/",
  },
  {
    name: "3 pos diff",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476509327033507739/11A67E517EA7631DE7E5CC9721228B630E6F9630/",
  },
  {
    name: "chill guys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/50200269958756920/9AE15CB65F44E8A9EEE73B3FEFE7ACC48071F817/",
  },
  {
    name: "Memento Mori",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2465231303181465830/4E60737BE255FE15A146BC7BD4A0FBCC73A35BDF/",
  },
  {
    name: "KIBA ARMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452865428987917753/782E74D6A8E46FC8D2B0F96490344A50BEF647B9/",
  },
  {
    name: "ANxJell Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2312097413021810119/ECEEE1A2E40DB8284B850B7A9FDFC422AA060E62/",
  },
  {
    name: "KOROLI FIDA",
    logo: "https://cdn.steamusercontent.com/ugc/19807983202307227/63C9C3CFAB8981C4BDC257645F79C22D10E0802B/",
  },
  {
    name: "VERTEX PACK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2047503411652997007/08F27DE9B0F0C1AB4C669A5785486AAA77E8917C/",
  },
  {
    name: "clan 14 ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/862866465556301578/6D9D394B3C43B98C16CFC748034B94DFB25A1B45/",
  },
  {
    name: "Royals",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1852681244182484532/DD19E6BAC2DCB2892B5AAFAE7C6CD41EBD0EE17B/",
  },
  {
    name: "LSG",
    logo: "https://cdn.steamusercontent.com/ugc/2497885570409092010/7A0CAB8AFDEC8BDE65F27E01C713A6B5459B65AD/",
  },
  {
    name: "Carstensz Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2056501732702586195/249112747B3394B5222936EAEAC258436EE15AF3/",
  },
  {
    name: "Team Tea",
    logo: "https://cdn.steamusercontent.com/ugc/11961897368046967862/BE4C3E94DE2C35A031F987551D50F666D5EA4861/",
  },
  {
    name: "Bastard Munchen",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485503208848871134/1A54EF518AC5753D5AE8119C046A00B105AFE194/",
  },
  {
    name: "Philippines",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072129920/550C31F04BBA6FFD70B1A64A880629CA4E33AF04/",
  },
  {
    name: "Fragment Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2557563514720801144/384307FF528197F67EEA81E123E15AEFCB903B9A/",
  },
  {
    name: "Team trust",
    logo: "https://cdn.steamusercontent.com/ugc/2215268843448084476/69A6100E542108AE14E50A547A0E0A79C279A6A7/",
  },
  {
    name: "SevenGaming-A",
    logo: "https://cdn.steamusercontent.com/ugc/2455117228793990135/A0C6AE657C50A9D0FF8A17B4464C810792A70D1D/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://cdn.steamusercontent.com/ugc/2473119197018013407/9F54FB2ED4476EA67C55994F5FB7CDAC3B882809/",
  },
  {
    name: "Jinx Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457355169045317170/685104DB5500D509E047C03E228C0ED3333EAE43/",
  },
  {
    name: "Falanga Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446098162678791859/80F6BD1E9C6C4FC8DC4CC5F042E7EA49ABC06C86/",
  },
  {
    name: "Talon",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2028347991408203552/8DC9872DA88071D728A914CE17279959423FA340/",
  },
  {
    name: "Rage Quit Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/29931370087555851/407DCA10CBBA7D087EE4099B0ED52E2EE34B1069/",
  },
  {
    name: "Sibe Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2155594242457564847/0AE1DF419893B5D44715164D9154E3E461D34CFF/",
  },
  {
    name: "Jellyfish",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2413452682791466267/59B93D30A9B32639B68723262837347D0E9D9933/",
  },
  {
    name: "Naodnu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486639888994556028/0C98C1012EE18103319B700C8AF1B60C2AD16104/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/14172984088870282/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "Team Sherlock",
    logo: "https://cdn.steamusercontent.com/ugc/45701674752006561/F7933BAA1E0865A2BDFB380C5F2802EBD8D6B2B0/",
  },
  {
    name: "Virtus.pro",
    logo: "https://cdn.steamusercontent.com/ugc/13061694558372404982/7AC363D410AC6F2F4B016EE7D73B7C266D0113F9/",
  },
  {
    name: "Dark Rebellion",
    logo: "https://cdn.steamusercontent.com/ugc/2471989872563605684/46813E19616E0715D879EFB5049D3A1DE331488B/",
  },
  {
    name: "TEAM RodjER",
    logo: "https://cdn.steamusercontent.com/ugc/54712126540793591/8C17D3C0427CEC0BD5C7FFCE19F1DB6D932462D6/",
  },
  {
    name: "Dandelions",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2523778098324415408/D16EBAE8AF76965AF89E6BBD79F892BD37485347/",
  },
  {
    name: "team_JYRO_Z",
    logo: "https://cdn.steamusercontent.com/ugc/12727166482730461475/2449AE00E0F54C746C250E4C3BE353FFFD750F12/",
  },
  {
    name: "Rock n Sports",
    logo: "https://cdn.steamusercontent.com/ugc/17070848244520593825/1AE5C6F12675015D112CA0FDD51C386E7492E261/",
  },
  {
    name: "Emperor",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473129090102246762/732C22586C087648FE99C64F7642EF7F6BDC13FA/",
  },
  {
    name: "Ascent Esports",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/350190.png",
  },
  {
    name: "Hokori",
    logo: "https://cdn.steamusercontent.com/ugc/2270440475417693057/E6CD5B8C942B91762340873685BD895A84077330/",
  },
  {
    name: "Oshi hi teo Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072995364/7348FC3634F8961C2908E8C465750B3AC0D78BDB/",
  },
  {
    name: "Air Defense",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1996819597310159490/85FEE9759F6A9ABB8283A21CE2A8AC57004B4BCA/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2510285689491362623/05380239030278EE27617FF04D2AF2D5D454DC07/",
  },
  {
    name: "STARIY DOG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485508282133643189/69F6B283038F7AAAB150A816BC301366BFE68F02/",
  },
  {
    name: "LAVA SPORT",
    logo: "https://cdn.steamusercontent.com/ugc/10484812299522601713/DB951955D01A59E1BC1DF091BEDD95D543094CC0/",
  },
  {
    name: "Tech Free Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/37822898901000735/CFE84A5E0E4C4D7ECA12AD6D542B0994E7C52949/",
  },
  {
    name: "Ягодки",
    logo: "https://cdn.steamusercontent.com/ugc/10850250871597108332/C96A03F2F068C2B9DDCA2D4B89FF7217E450A11D/",
  },
  {
    name: "Advance Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63711481648154156/4F51C885182DCFC5E5355ECC8C650CDB5B7CD744/",
  },
  {
    name: "Bullish on Gaming Lite",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2294088813167309799/DD02D04FEDF103E1288C4A037F0430F1D58F7AD4/",
  },
  {
    name: "Ninja",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/62588809123950971/550585992FC03E9255F8DF8A5F84AE0E3086326B/",
  },
  {
    name: "Boots of Travel",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2316601738469798169/46727F2A296F2CF5F1597C8467D603C11FD56B7F/",
  },
  {
    name: "SwitcherS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5993798699007602132/40D0E19ED0B698676FB2223B6E8279811E731FEF/",
  },
  {
    name: "The Chapulines",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2504644394417430527/968257F063C9D2831AD83566F4C56E4F1B9BD2B9/",
  },
  {
    name: "Сыркопченные",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452845686184075230/D61DF507BC1F2FB13D5462FE286E06395F8DF821/",
  },
  {
    name: "Silent boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1005933395527156622/BFFE022E8B4B7C8439F4903C2AA7E6D8AAFB43DE/",
  },
  {
    name: "B8",
    logo: "https://cdn.steamusercontent.com/ugc/2485493794725791565/CC82E4B9F79CD7D0C9A1B946D2C2A4E56F9789CA/",
  },
  {
    name: "TG ",
    logo: "https://cdn.steamusercontent.com/ugc/14995987404436054691/9C9504D094C4E6E27483350C2B9001C3FA37A8B8/",
  },
  {
    name: "Cross Guild",
    logo: "https://cdn.steamusercontent.com/ugc/14182403363178997/9363A303A1CC532B4B27DB2149E16C665CB9D43C/",
  },
  {
    name: "Y5",
    logo: "https://cdn.steamusercontent.com/ugc/10793773216432568/803BA3E82F7416EC57D043CC82448D1AF69B0269/",
  },
  {
    name: "4 Zoomers",
    logo: "https://cdn.steamusercontent.com/ugc/13054458455623412/46FA87519B52C38DBC28F8C8A42407B2749B276B/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2431468257629769817/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Imperial",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495633213070191407/805E3CAFF4787CF36C84CA0B261A5F5E29C20F40/",
  },
  {
    name: "Team Press",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479878148662969495/FF6C68B1871AC1D244C13D8D243A2CC2F3A06B65/",
  },
  {
    name: "NAVI Junior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2037353829143019867/9AE6002A5A41A74550B51358C4ADB9F81E6B50B0/",
  },
  {
    name: "Mad Kings Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2303092842326955239/F9894AE423FE64758ED7B79CC8D01D2CE1304A6C/",
  },
  {
    name: "Gachi_kats",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1842551354047130564/3A7EBDD4A779F26ED40189490F454F6581EF3DB0/",
  },
  {
    name: "Winter Bear",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1735567084524398666/208F3B33673FF6026D653C0392A3F955C6E9B094/",
  },
  {
    name: "ARES_OSH",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/41197344862513019/5872368B73A969F48C8705717FCD21D9307A3ACD/",
  },
  {
    name: "zxcdalbaeb",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2517018990957769288/A5396F9C286874DDC5110B96932CBD94FA156D55/",
  },
  {
    name: "P2P BOGI ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/6288106013888346/8F5896F2B2061C7B6737CDA60BD7E7F4C8B7AC5C/",
  },
  {
    name: "Talon",
    logo: "https://cdn.steamusercontent.com/ugc/2028347991408203552/8DC9872DA88071D728A914CE17279959423FA340/",
  },
  {
    name: "Pronouns2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2306473712153940280/0E4678A12D5EDED010AD8994B0A54293069FC541/",
  },
  {
    name: "Yakult's Brothers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500152590314943726/76CAF13C890C3FEBA92E152739F02C769865B286/",
  },
  {
    name: "пипяо",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2005841944292111036/F3F9758782AE29783CEE85A451D8D56AB8304C38/",
  },
  {
    name: "Zero mistake",
    logo: "https://cdn.steamusercontent.com/ugc/10077249906373537485/B43BB39FCAC3924DCAAA808AAA8FADB02BE1379E/",
  },
  {
    name: "Team Kobald",
    logo: "https://cdn.steamusercontent.com/ugc/13114081360278512183/812211CA38FCBC271A83C89ABB756BD7806E201C/",
  },
  {
    name: "SoSteam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2465230299724620687/543359243FF1AD21538EFB867CD7096FEE323BB3/",
  },
  {
    name: "Notorious Thugs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5819288008771164199/E44A4357CB7AA7B6F556E307375C95DF1CFE22AD/",
  },
  {
    name: "wdd",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2390937128859215759/1540E67E1FC151FDFAD1B55EDBEE14730F66BF1A/",
  },
  {
    name: "Hajime",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2360517541591442630/110E246D9F872CC91481BC73EE9877BD7D1A7AC7/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2321112186415898348/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Tamptaxon",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/81379587682633657/52635B11E4D4D8B054EA9E3CDEE99060B7815ADC/",
  },
  {
    name: "Terrorist Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2075652812744699999/EC686D5354EB889EAADEB7DA9EF3E580BA53F288/",
  },
  {
    name: "JustBetter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469732370724330677/7A435285CE6A720CD6A711BE119180466B62F5B1/",
  },
  {
    name: "KoT.Next",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453855817070066/9CBE5835CD3995B6A5841D2C8C9B715D5F5DE9F8/",
  },
  {
    name: "WINTRADERs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458492391310694628/4A768C324F98A419A0BA5E7361FE370E0972B877/",
  },
  {
    name: "Soldier Side",
    logo: "https://cdn.steamusercontent.com/ugc/10810695485024534547/715F268A62875CD8DD23AF6BA6155ECAB7F63F95/",
  },
  {
    name: "BulletProofs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2279452649507882630/17EDB0683EF35F599DA93BA11376E18FE58AF466/",
  },
  {
    name: "TeamSide",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1010438776708216657/ECD0AEC2ABB2D43F3C1A1C0BFC20FD6FCCF7D948/",
  },
  {
    name: "Teiko",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5163021536155288/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "CDTeam",
    logo: "https://cdn.steamusercontent.com/ugc/251463491391519475/775C0F0CC9F867073D72C86F44ED7C415F2CCC11/",
  },
  {
    name: "Moshpit gang",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2521536223467401583/B6B76A055CC28CD60E3DD972977C47982FD5A92A/",
  },
  {
    name: "TEAM ARIZE ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1690521095789021137/205C5FD88888360CB06DB42D672DD8EA38198749/",
  },
  {
    name: "Team giga cringe ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2506896757670944891/40A938C07C8A832E054C12221ABFC86AFA419559/",
  },
  {
    name: "One Move",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481009755936011560/7896FCA2F2ECE9D66AACCB95E75E4FDF21F432E5/",
  },
  {
    name: "Les Voleurs de Goûter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2054245038739307232/F53C8F4CADA98847D8B54B3A639AD5926A5A8052/",
  },
  {
    name: "Blizzard Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2385305186023234817/E0CFCBC8A6897D78FB6733287AAEE8EDC56866F6/",
  },
  {
    name: "Fary Tail",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/942842322404871363/CD7FBC0008E0F45BAFC95BFD273E93AFA86A0CE7/",
  },
  {
    name: "ritashidog",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2376297984906857862/98A8263E25643C115FA32B1EC52D4BF9294C1772/",
  },
  {
    name: "MAG ID",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2333496578698790270/D7955018FA3AC7FBB78621C5C6D5AD33B9EF673B/",
  },
  {
    name: "Heroic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289583009790873356/090FC5EF3C5E35B60ADDB3AB174720399DB96A70/",
  },
  {
    name: "Gatitos Persas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297464623501896084/0863B5965EF4B2338E5E8D3CB3BEADF7A630AF5B/",
  },
  {
    name: "xFinity",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2079018553396007733/EB625001AE4047E17544233962CFA042B4D9100A/",
  },
  {
    name: "ZakaZnie",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486631010791120322/DA803B8779628F400D30643F41978E1EBD42CF86/",
  },
  {
    name: "White Ice",
    logo: "https://cdn.steamusercontent.com/ugc/8544435822977835/9DA99CA8141E723614A0584693994D1903DA4A01/",
  },
  {
    name: "EPIC FAIL",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499025422201558021/FF218711A01AB1231F8ACB22E00E4D842DBE778F/",
  },
  {
    name: "Alone in Jungle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508027773720114538/E2ED12C061D18A50263CAFF086A5BC2FDD5C4C65/",
  },
  {
    name: "business club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/23180409666352345/130FA56742842E4F9C5CE430C3F515F4C8233AFC/",
  },
  {
    name: "TT InfinBank",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466362910455921975/4B943251626BB27E27269EE893D78B7611ACA98A/",
  },
  {
    name: "VP.Prodigy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2286203122943191485/3A0BD07DAB42E70B77229B1C17DCF874C9D2EC45/",
  },
  {
    name: "UNICORN GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/12733565106535070463/35B546C4268B0076CB7042E63151DF1FACF7F356/",
  },
  {
    name: "Kiba Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2553059914941233732/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "VAL DE MIERDA POR QUE ERES UNA CAGADA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/785230733034195866/591E9E5E43838E6ED1A6F40F84B2EEA343CFB20E/",
  },
  {
    name: "Mystic Maidens",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479885123785187999/C2101E8C1E619AAB0630724FE95796016B716A59/",
  },
  {
    name: "CoolBassный завод",
    logo: "https://cdn.steamusercontent.com/ugc/2050878574189651178/86DF072C4E4B7E4A36869D1F222EDAB71CBD20B5/",
  },
  {
    name: "V3tal_GandJuba5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467488268118942117/31B215C8107653CB7AC395B8FBDD249E2B9D14C6/",
  },
  {
    name: "Matreshka",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289581108031278201/DE2ED21F4DEEB8C3E302C5A0AF9CAF8CC84E8BA8/",
  },
  {
    name: "Geek Fam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492249322244227443/C72214A86E6C450DA8CF1A18AE9539B5CAEE7D45/",
  },
  {
    name: "ChipiChapa",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2425823802342689838/5239458D9D6877743A33F192731B7682BF3CA562/",
  },
  {
    name: "5clown's",
    logo: "https://cdn.steamusercontent.com/ugc/53584147264713185/C41592BF04B685FB0A6F6BDF3919FF002E8AE0FD/",
  },
  {
    name: "Отдыхаем в дотке",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2270443742602398279/46576B55E3515B8F7522AE262A9A690689B2A756/",
  },
  {
    name: "papaya team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496762928187165633/5E75206A2776B32A3387F1EE846F44F3CF3DEA6C/",
  },
  {
    name: "Flow Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2310976136782820326/68351CA075BA89C255A559DF31B16EB5020553C1/",
  },
  {
    name: "Arrancars",
    logo: "https://cdn.steamusercontent.com/ugc/18043107576209107828/256A37F1C7B9B4B7AA6DF6AA729745DF4DE56D28/",
  },
  {
    name: "Night Foxes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2521530104083907050/FFA2BDEA1F29E0A06B69DB6D1C846DA75D672FDE/",
  },
  {
    name: " Titan Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2397690083444615849/B03C2BD61E287FB1142F2560843718E0145BB240/",
  },
  {
    name: "VALUYKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2504647575817956166/55725281E863595B98A51E21A276689E6DB53E23/",
  },
  {
    name: "B8",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2030594077477371362/8D84BF07D726E47655BD7CED1B6CFB053B97B672/",
  },
  {
    name: "HHW",
    logo: "https://cdn.steamusercontent.com/ugc/49079912448221941/DE67CFAA78E3276BECABE24030907B12A987B51E/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492270657679881015/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "HYDRA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511403980000601665/A9227AFA6C2DD7F9A1A8E0F5C4278579DB10833F/",
  },
  {
    name: "Fun Gamers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430327401937926256/F73A62390224539761DB3B15E527B2D6A03AB56C/",
  },
  {
    name: "OTHERS ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1722084096585535398/0E4E70CB7D721193655E1B145C737C6C9D511766/",
  },
  {
    name: "Sentinel Esports",
    logo: "https://cdn.steamusercontent.com/ugc/10572493536180838866/B9E70EBB885B2E7EB1EE68669F63A8E890525D3B/",
  },
  {
    name: "WalterGaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2406699727554456846/5DDB8C57BB9850AA01BB02D2008114CFCA7DE3F7/",
  },
  {
    name: "Цивилизация до них не достала ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414580393337317183/81889CD42CEA1DA34C9224D7F58905586FA47A69/",
  },
  {
    name: "Out Darkness",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2274945577017455376/8AB80E2EE633ADCDA9F9A340C8C170E448C502BF/",
  },
  {
    name: "Беженцы",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2009203159922610108/0F2F922813089C5DA95F0D168F9FC0776A7FBE30/",
  },
  {
    name: "Autistic Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2539537310934404763/D6BB8441B7AB35ED8E32272E4F0CF6464F8597F3/",
  },
  {
    name: "Team Nemesis",
    logo: "https://cdn.steamusercontent.com/ugc/16578975333650734744/040492179D9E0E83DA0559848D88CFC17A1EFCAC/",
  },
  {
    name: "TEAM NEXT LEVEL",
    logo: "https://cdn.steamusercontent.com/ugc/16515489788422095080/B5EA1DD5E2BABC4BC77BD2CF53746A6AC9E8E7C4/",
  },
  {
    name: "OVELON ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1761442119646899466/58EB8274ED331B88ECA87D59743049FDA061F0D4/",
  },
  {
    name: "PWN SHOP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2049743254963357108/9E01111785D650288691ECF3A5426280A0EEB670/",
  },
  {
    name: "enclave",
    logo: "https://cdn.steamusercontent.com/ugc/1727668393679880260/6CD6D202A24FC6CF6C2F3E19A6333378B1E5BD4E/",
  },
  {
    name: "CrimsonSky",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2075635690086590897/AE8997D69BAE95D9DEE56EAF662269E793887E3F/",
  },
  {
    name: "Execration",
    logo: "https://cdn.steamusercontent.com/ugc/2490004871924581269/9132E5E0903B2A368A00780415D69766292F5893/",
  },
  {
    name: "FORMULA TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/10875786895368950266/D1A735ECF4538EA57E01071C04D1969AEF71056D/",
  },
  {
    name: "Foxy gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2289585333366985191/AC5A2097BEF04FD6D958B34C8A02A75C445ED58A/",
  },
  {
    name: "MightyGods",
    logo: "https://cdn.steamusercontent.com/ugc/16967406785561217091/329790708889DE3E474A3BDB27FD2352619012A5/",
  },
  {
    name: "NothingToLose😘😚😳😳🙄",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/842591058098937318/E38A842673FB64F5F074AF1AE42F4853C2971701/",
  },
  {
    name: "Daunteam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2513644999184892471/AC1F2B2DAD4913A20BCDCC11F098ABB7F899DF2A/",
  },
  {
    name: "EYE GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8541973413326081/F4D0AD6C0EFC58DCF8DED009E4D51F25BE2DA05F/",
  },
  {
    name: "ScaryFaceZ",
    logo: "https://cdn.steamusercontent.com/ugc/2057636696170287978/0B8B203054D1E82851EEEEFD2F1D9573E73E324B/",
  },
  {
    name: "FIVEBEAVERS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461865653122443176/F465DD73269BD01091EA334680E8EDD47990322E/",
  },
  {
    name: "NARKOMANEIS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2259184687774663609/61AF0806E3BB391E1B92BC25C8A466581040C40A/",
  },
  {
    name: "Ambrella esport",
    logo: "https://cdn.steamusercontent.com/ugc/38950155490651726/F41EA6EA206C91DC99BAABDABE7B1B403E99CC96/",
  },
  {
    name: "MISTAKE=PUÑAL",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1827893955648071532/B69AE208165A57DDD0FFA6A0BC1620811F531C58/",
  },
  {
    name: "OS CANCELADOS",
    logo: "https://cdn.steamusercontent.com/ugc/16223544121995544037/A484C7D7F0E423B7EB8AF7604358D6D965DA8DF7/",
  },
  {
    name: "Fantasy Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/1814393308114867522/59563CB473C950901D12EAAF91F1375395442B75/",
  },
  {
    name: "Dibujitos Del FB",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474254990015593230/EA56281DC116414B77FD1797C23D50EE9E71DC58/",
  },
  {
    name: "Numa Numa Iei",
    logo: "https://cdn.steamusercontent.com/ugc/2269315379821279184/6794D4B3CE5E1BAE2435762F6B2EC2D19ECE1BE3/",
  },
  {
    name: "ВРОТОБОРЦЫ",
    logo: "https://cdn.steamusercontent.com/ugc/10257163005645057938/F052FEA7774D0931665E6B2CA3CA755DF4CD11B1/",
  },
  {
    name: "LSG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497885570409092010/7A0CAB8AFDEC8BDE65F27E01C713A6B5459B65AD/",
  },
  {
    name: "Red Submarine",
    logo: "https://cdn.steamusercontent.com/ugc/11928558537478252/983EA9B5A4096A211EC6191AED4488ACAD524F1C/",
  },
  {
    name: "Modest_Flies",
    logo: "https://cdn.steamusercontent.com/ugc/2434851666342498722/08E37CC7DC2C39D40BCF7850EC41CCDC910E31B2/",
  },
  {
    name: "Tower Builing Def",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1699528087750961484/E6E8D362B53E6E1F5118BC9415BA6842E1C3D20C/",
  },
  {
    name: "墨",
    logo: "https://cdn.steamusercontent.com/ugc/10807207795808781811/CA687AC2362401834E07DFF4CF01EA9C31C8AD02/",
  },
  {
    name: "Team Reflex",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482124966976462177/5498F2C327A2323D3E52F6AD6ADE90E74DE0FE5D/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493379529821139162/45E0734610736BEC6A48549F46CB64F13E8C734F/",
  },
  {
    name: "Кибер Планик",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2444969543649978372/F81ED981AA4911FB35E2EE08C8CDF5C6C55ABEB5/",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474243029688224928/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "Hininy ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264814240904868836/888DDDFF7D47471DA1C7653B3EF58E10C3532104/",
  },
  {
    name: "SLPKTS PRIDE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495637758657749932/27C17E651E752D8506E5690AE38CD51E8A7D655E/",
  },
  {
    name: "Team Storm",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2478757956118667487/B15E2442BCA995AD468A28242082D04A43A6B468/",
  },
  {
    name: "sifr00",
    logo: "https://cdn.steamusercontent.com/ugc/12012112986748298032/3EB91934FB121FB417EE8358A422BB2F5789F4F5/",
  },
  {
    name: "is about GLORY",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2325614644444018985/A2F44C096F28760EFE6CA969791182D6A0DDA9AD/",
  },
  {
    name: "Team RABEI",
    logo: "https://cdn.steamusercontent.com/ugc/10563016990714890796/7D2BD0E44A0A1E3DBE718F43C1C134F0FB0B99EB/",
  },
  {
    name: "PAREDAO DOTA 2",
    logo: "https://cdn.steamusercontent.com/ugc/16626059131359865700/0F1E887B50B28722F3CBDDC0FBE5A296E27A95E1/",
  },
  {
    name: "GO E-Sports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451739529076404020/24E4FE03BD6EDCEE83E035E64B2054B7902D05D2/",
  },
  {
    name: "Violence team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456242130922932719/6EEB1BE4A3F9A28CA2EE6C130152FD240F67D61B/",
  },
  {
    name: "Deadly Dragons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2270444915132695440/AF3276AFB7CB5336735D9810B3EB33BE45BFA203/",
  },
  {
    name: "BloodyRose",
    logo: "https://cdn.steamusercontent.com/ugc/13054458466396118/2A7A8AF97F83D018A54851B82EEEDAB1B10FCA52/",
  },
  {
    name: "52 BROTHERS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2273821440497849830/5592D433DE084FEBCEE69C2A03B91DCE8514B80A/",
  },
  {
    name: "Team Sri Lanka",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333487914/64B2A52AE327E8ED4380F328D7352B228194725C/",
  },
  {
    name: "Storm  Squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297464623510608729/A3790432083AB6760B291CD7AC435C82B9A27E13/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458483061645083689/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Chato Metraca",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477632056229437116/3AC1157DB9E1A6BA77C80AA19C1B3C9128A81EB1/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503522680644142379/2463CD2FDC05838CACEB66AAE27F597798C40B34/",
  },
  {
    name: "Aurora.1xBet",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2362769341411270166/E13C592A0E744E1C386E09DE650BE36B85AE8137/",
  },
  {
    name: "Otakreyson",
    logo: "https://cdn.steamusercontent.com/ugc/1657851754063994366/55A811664138770ED2F7179AD3E7B837E246204B/",
  },
  {
    name: "Business Club",
    logo: "https://cdn.steamusercontent.com/ugc/2041874097465563602/35B8C3D831CFD2EF5A19512410C18F1B7F9C460A/",
  },
  {
    name: "Heroic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297466512875947248/090FC5EF3C5E35B60ADDB3AB174720399DB96A70/",
  },
  {
    name: "DRune",
    logo: "https://cdn.steamusercontent.com/ugc/2280576552131881929/F0B866F1CF06C9581B6EC01530F3A54A26E6FF40/",
  },
  {
    name: "Puraka esports",
    logo: "https://cdn.steamusercontent.com/ugc/2497900790524246321/7A5C13D253D94C0BFCCD5778EF68000E40D0744F/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2386432261331571069/C4555A5D77DAB69ABEDFBE433072D8C8131BC555/",
  },
  {
    name: "LevelUP.MarsBahis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496763658555957328/2A947FD00F36F85DEFC900D0513E8B559637040B/",
  },
  {
    name: "Y5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/10793773216432568/803BA3E82F7416EC57D043CC82448D1AF69B0269/",
  },
  {
    name: "EternalEmpire",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/19797001883001145/319DDAE2B1672CB528988C965080430CB1D87E59/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2492270657679881015/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Dmokafarm",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1880834899982343242/C44A2A39CBB6BC26EE6F4BE076453D5AACB4FFEC/",
  },
  {
    name: "Slaughter  star",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2283950641160794418/5E07610ECBECE3B2FF70BD506962F9371EEE03E4/",
  },
  {
    name: "Aurora.1xBet",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2299717138378052349/E13C592A0E744E1C386E09DE650BE36B85AE8137/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2395438191613061704/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Fractal Horns",
    logo: "https://cdn.steamusercontent.com/ugc/11675263686908858663/966A3DB63F66A92377CE9E19A04ABFB5F4CE4CA4/",
  },
  {
    name: "LINYX",
    logo: "https://cdn.steamusercontent.com/ugc/62591346511901293/CE0BCA6ABEF54A2EC8E33457B5ECD8F8CD23B9BF/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2548556315446212479/F4D0AD6C0EFC58DCF8DED009E4D51F25BE2DA05F/",
  },
  {
    name: "GG Holdings",
    logo: "https://cdn.steamusercontent.com/ugc/17884735133994593079/FF8EC639FECAEC1803EC5D3DAA26B68F47A832C6/",
  },
  {
    name: "5PIVAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458481611080140657/265C7E87D0F10F16A926D9EA19BB8902B8069542/",
  },
  {
    name: "GOYDA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501270880830868618/7EF50612EA9A239F62027C4617ED628F8DB21093/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459620828424773387/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "BratvaStonikBakislav",
    logo: "https://cdn.steamusercontent.com/ugc/17986976511072523625/E48508F97905F2AFD95A05B860B8BB26E546E93A/",
  },
  {
    name: "From Zero",
    logo: "https://cdn.steamusercontent.com/ugc/49071668500868755/4C5FB95D7775BD8976854A71BCCDCF7B3BA763FE/",
  },
  {
    name: "L1GA TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/40063200209690390/20B527165E8E637C83F27A62FFE1AE957CB43018/",
  },
  {
    name: "DEMONIOS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487745594563501122/3D6996746E7B1A32AE8882EB270E9F82533B8830/",
  },
  {
    name: "Без негатива",
    logo: "https://cdn.steamusercontent.com/ugc/2541800915804105508/2CD920953831C881199865A3CB25AE4908497B31/",
  },
  {
    name: "EPITAPH",
    logo: "https://cdn.steamusercontent.com/ugc/9349195317844490014/4E6EC90ADC3433299DEB4700D53591F97DF53291/",
  },
  {
    name: "Flawless Goblins",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1972044023037974203/AFD57B5B64B1E42F199DC861D81052FD991943EC/",
  },
  {
    name: "Heroic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297466512945781108/E92383B84CC57EA10113422B791E63A0482C1855/",
  },
  {
    name: "Team Espado",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493381970766114853/71DC134EDD179FA3B71D4C070DD99DBE28C318C3/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2296337442904305268/456C2294E11687ACC192C73BEC98A1852CFDCCC2/",
  },
  {
    name: "ITB.Shuffle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/10796235338716618/FD2C48006B2AC387BA7EE670FB12C3DAB5B5D134/",
  },
  {
    name: "BLACK KING BAR ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2517032845591651935/03CE2FA13E2B7857AE997F739B23AE6F25278975/",
  },
  {
    name: "Quantum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/20924804808876120/D634F289A1FF321C95053D7B2077284AC568E2EC/",
  },
  {
    name: "ToLight",
    logo: "https://cdn.steamusercontent.com/ugc/4047259190541005/E56171571997EF022A2C29AF9B35C63A66347EB3/",
  },
  {
    name: "Padaria do Salmir ",
    logo: "https://cdn.steamusercontent.com/ugc/972100947056563483/7240B23438BD32D2F6BE991D923B1DD108F10046/",
  },
  {
    name: "4Anchors+DotaSama",
    logo: "https://cdn.steamusercontent.com/ugc/17595875135205067742/C85A714977046CAB9F544A6E6E682A26789480B9/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/31063611727239159/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Night Fury Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5856442705768588732/D3D1680F61D5D68C426889E07683D1F71FCBF286/",
  },
  {
    name: "ImperIum",
    logo: "https://cdn.steamusercontent.com/ugc/12205875741805547172/9ECAADCB83CC7DBCC6E21888DE81E6A12596A762/",
  },
  {
    name: "Yakutou Brothers",
    logo: "https://cdn.steamusercontent.com/ugc/9304043050512076395/5F300A650D1FC1059F69071F890E047F600BD79D/",
  },
  {
    name: "Kripchiki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466355303536181808/B2BEFEC250B7C2996B4D646E5CC5C9442A460E27/",
  },
  {
    name: "1win",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466354035067749836/58204B73AE386FFD486E07DF13C521E40081164A/",
  },
  {
    name: "GALKYNYSH",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1839180033860671079/ADC9EC54D3B6A50F54E372E97C36809E008BD11B/",
  },
  {
    name: "Cruel Dragons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2252424264010359524/A4BA8639F41E19EA1738B28D9AA247D7BC372D63/",
  },
  {
    name: "Aogiri No Ki",
    logo: "https://cdn.steamusercontent.com/ugc/15440997308640090101/3112F6E02F56BEF35E8C2A8C765FB7FB11C513DE/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/5173159093241857/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "MKS TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2415690703802619369/0C6C9536B7A0B3C5D3F00A7B2E3A8AB6E9523861/",
  },
  {
    name: "PVISION",
    logo: "https://cdn.steamusercontent.com/ugc/15347273642112565870/63EFF31A468C910660FFC8B90B25565C8DA6BC13/",
  },
  {
    name: "Kalmychata",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486629742250277992/FA2A79A3ADF3FBCD49A6A1D832BC730671D95786/",
  },
  {
    name: "Dreams Come True",
    logo: "https://cdn.steamusercontent.com/ugc/41199248290011795/6F9AEA69C81EAED8DA804F6E3C528AD0B04F5429/",
  },
  { name: "<UNKNOWN>", logo: "<UNKNOWN>" },
  {
    name: "Temporal Paradox",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2443838201449946546/B9CF0AA4604434834CBB1B3ED7B4647434CE1C25/",
  },
  {
    name: "Crayon Shin-chan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2472003190188137413/A95D9F3A6CDF993446DFAD154F726F3EAE253223/",
  },
  {
    name: "TOXIC TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1908988554144828055/21F5207FA69BBFDEAE66FC1A852FBCFF09FCD140/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455114058077810942/E228DDF5F2F0AB670945CC00351F32BB2644ABDA/",
  },
  {
    name: "Last of the Rhinos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2282826178698078617/FAA628EC7EE56C2B317B7E1A024CA38EE9276EE6/",
  },
  {
    name: "Fun Gamers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495646454755108650/A8BBB8452C726E5249ACD2A853835E67FAF79B7B/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5839554206982562469/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Apple City Gang",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/59211109393007839/ED4381159CECB48C6FC7C54A5B3EEE7FCA3A54FA/",
  },
  {
    name: "prodigy of god",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501264625808044797/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "GAMEPLYSH",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2512519099285097378/34EAAFD329E757C8AA7C9B587D65C8C00BA5B524/",
  },
  {
    name: "Marpic Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1788311438924793/AA1B64C4AE8A20CDC245EDD5A6624CA9619838A1/",
  },
  {
    name: "KUKUYS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/13041602439734845/8E15EF14C6136EE73F20181FAEC64E1AF145319F/",
  },
  {
    name: "МУРМУР",
    logo: "https://cdn.steamusercontent.com/ugc/2461851071368677445/1B5F5157444B457BF02CD98D5DF64AAB55DB64BE/",
  },
  {
    name: "Hennessey",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2113936579357895410/803FC68CD817B5F83806779C32A01A2320514904/",
  },
  {
    name: "Skyblades",
    logo: "https://cdn.steamusercontent.com/ugc/2424697006978293524/F5906F73364F065897D36A2CD1B5AFBB8DE40DCD/",
  },
  {
    name: "SOLO TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/15167833884753020847/01919CB6F7A3F5B15C323185E8884C3F44DA7FA8/",
  },
  {
    name: "vPotoke",
    logo: "https://cdn.steamusercontent.com/ugc/33314777904202180/7DEF69D126A58948A57D82D77EAB530DE1824F32/",
  },
  {
    name: "Level UP esports",
    logo: "https://cdn.steamusercontent.com/ugc/17408586055646866479/D2A5B1C6F15BAB570A03639442180FECFD9D9A37/",
  },
  {
    name: "Kame House",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2213017043647682978/5AF561021D245C387A4EDC04F1C93215DB8D10F1/",
  },
  {
    name: "Team Mansaf",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/44567523592646266/80329C117DF462607E91651BEF253A0FC111D58F/",
  },
  {
    name: "Lighting Legends",
    logo: "https://cdn.steamusercontent.com/ugc/2350384442452246246/78AD251D0688D17927FD7C7A4F40CB11A30F50BF/",
  },
  {
    name: "infinite ESPORT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2532793716700692763/A33D3E23A8149425A2C9E6F8C7A3184444B34F88/",
  },
  {
    name: "dyrachyo team",
    logo: "https://cdn.steamusercontent.com/ugc/18014166809127009011/BF580EA5268F4FFD1789E00F206FF19EDCE115FD/",
  },
  {
    name: "leman fanboys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2028359449105910687/8DEBA69B8CCEE7A49BDAB75A26C5654B6280ABB5/",
  },
  {
    name: "Cybersport 4ipiki",
    logo: "https://cdn.steamusercontent.com/ugc/2079031146380764630/FC5406CE71C3748A79872FF37E742BD94689228D/",
  },
  {
    name: "Dynasty Dragons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2553059914889643528/FAB8F056D7595AACFC9FC0FC730B976A57AC94E5/",
  },
  {
    name: "далбики",
    logo: "https://cdn.steamusercontent.com/ugc/11414835976085027429/5251DCF9BB32FC3A7D0367E8DA3F384FB0DE521D/",
  },
  {
    name: "GOODWIN TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/16816365790579511569/396BA0DAF2F630BF9E186C6ECB436941BABF1C82/",
  },
  {
    name: "DARKNESS GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/1877463356745066761/970A15CB7D3F860BA71E931D9D5C10692F27EA01/",
  },
  {
    name: "Hässleholmens BK",
    logo: "https://cdn.steamusercontent.com/ugc/42325148191010571/1E1465D3DC680B8CBD730EC1516E0FBF74DBF479/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/5163021536155288/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "ASAKURA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473112602549990305/9854CD03A6A44348475DC298295552B5CEA70794/",
  },
  {
    name: "Trap Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495647722485442912/B7060CE7B58A742BEDC2A544CDF6F1A71D15C447/",
  },
  {
    name: "Gildiya Govna ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2093667512242843727/E72A7F00D8579C3D3D53ADA7296C4A3D64AB7359/",
  },
  {
    name: "gloryside",
    logo: "https://cdn.steamusercontent.com/ugc/60344615798124395/7E04F220702FE5A092D74E595204CE1AC7CA8542/",
  },
  {
    name: "Business Club",
    logo: "https://cdn.steamusercontent.com/ugc/23180409666352345/130FA56742842E4F9C5CE430C3F515F4C8233AFC/",
  },
  {
    name: "МГАФК",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2031736116034979471/1A61C034BCF52896F2AA0421D033716923CA6880/",
  },
  {
    name: "KIBA Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38944277437966545/782E74D6A8E46FC8D2B0F96490344A50BEF647B9/",
  },
  {
    name: "Mad Monkeys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2030594623051270091/A10316EBD20ECE720470ED4A5D07B3C6DDDC693A/",
  },
  {
    name: "Usyards",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493397190901906151/2EF468DE5DFEA92C3144A26E46BC2F71158A46BF/",
  },
  {
    name: "Prosto Vlad Team",
    logo: "https://cdn.steamusercontent.com/ugc/14593384116049569504/C00384E93E3F66CA66EF1532A3E8B55A2D1201FC/",
  },
  {
    name: "Prodigy of god",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501278490228003245/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Ghost Trick",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1808780291747275929/A79528842E45297B241398B66F5EDF5992771139/",
  },
  {
    name: "amar_EZsports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2491143488627269010/93F76D5ACD71DBBE1DE8D1C4D46588B91E7A8989/",
  },
  {
    name: "ЛАНДЫШИ",
    logo: "https://cdn.steamusercontent.com/ugc/18321848182338827512/B89038CC970D99C570F246BA7FE95766BA06BF35/",
  },
  {
    name: "Chompers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2309851411868349896/31CF1A7CD341B7967F203503A11745F64CAF5B4D/",
  },
  {
    name: " Team HaliFFat",
    logo: "https://cdn.steamusercontent.com/ugc/1820012109373038689/B4B17B2A11F6991042A79F316478DB572DB88DC4/",
  },
  {
    name: "Blackpukers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1887597844446270477/6E387B14978698302B904FEB2FC24F45D8CE99B1/",
  },
  {
    name: "AIM POSSIBLE",
    logo: "https://cdn.steamusercontent.com/ugc/17277492164309874225/1B660F7A93D2ABB6F734F73908F371357BD36E8C/",
  },
  {
    name: "Team Spidoz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2433718881124604759/B798AD5B8386BF5154885039F42F8CB1C2378270/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/14613806047582494783/BD73254A1C9F0B80552DA9EE3C3DEB1C2D05605B/",
  },
  {
    name: "Business Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497888828132178162/069C7E7A630A8FA333ED65FE72820D4091D24953/",
  },
  {
    name: "Crazy Geniuses",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2411186928974480498/7401ED702E82F71577B9C00AD6938BB1B45050C4/",
  },
  {
    name: "TEAM CASHЕВАРЫ",
    logo: "https://cdn.steamusercontent.com/ugc/13240567744441070372/0A79E1FFF07152DE6B5BF8B9930C8A4C87BC678E/",
  },
  {
    name: "Estar Backs!",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457349368893624182/0940BE82E218C71369C672C95943445AA450EF45/",
  },
  {
    name: "AVLNC.YETIS",
    logo: "https://cdn.steamusercontent.com/ugc/11409022819632048455/6CAC6B9F89356FB5918C6AF2D3FD3664F5E4C0DF/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479871807535871655/D5C01D46D580CACDE22890AD940DF51EA694E3D7/",
  },
  {
    name: "Marvelous Warriors",
    logo: "https://cdn.steamusercontent.com/ugc/17976580553571757685/08ACDA39A18F8336DF6782B6D64A148F906D7278/",
  },
  {
    name: "Passion UA",
    logo: "https://cdn.steamusercontent.com/ugc/2503530623725723229/672D6BE0D568AE5E7BC8494F05683207DCA9E28E/",
  },
  {
    name: "Team Random",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494507313164208609/E51D7AF0DD51BCE6EBA1DE8BE33212EE6594D1CB/",
  },
  {
    name: "Gantz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461852600004255151/E0E23CCFC72FE43177B84348672AB0E9E79956CD/",
  },
  {
    name: "VitaPLUR gum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518150500890319275/0E26927BF062557DAC1A0749351F9E4D47ECAB71/",
  },
  {
    name: "Advance Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63707821961883232/08E75E710C879E4081743BCF2C37D1ED42271A0D/",
  },
  {
    name: "Rogue Squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2058763770156236845/DAD133992032D3EA1224C5907B882E283BF42014/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://cdn.steamusercontent.com/ugc/55829769476672190/66A70A578F13168E5D4A021F327B3256C7C7C44E/",
  },
  {
    name: "Kaiser",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2432578705340317496/E0656236FE313DC892355323859D1CD0615178F5/",
  },
  {
    name: "Bor Tactical Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/469807625401208706/45AAED3931CE30B44ECFF07EF0356498D9BE905B/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442712854886103681/753A21254BE3A57C61EB332B1BE6A353D9B2F8F9/",
  },
  {
    name: "FenixTeam",
    logo: "https://cdn.steamusercontent.com/ugc/2309848241691039928/369B45B6067BA807581F7C454D69D02416456FD7/",
  },
  {
    name: "Team Kobolds",
    logo: "https://cdn.steamusercontent.com/ugc/2167980409447929846/289965BA1A48CC692D9E133DAC9EF95DC590FC64/",
  },
  {
    name: "aCatsuki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/4034403192256288/69B36B8F0BD8BDD9DA5BB50C1ED8936DBE6FF4DE/",
  },
  {
    name: "TPPLS",
    logo: "https://cdn.steamusercontent.com/ugc/11716104790026214866/BD26F44848DD3C71E09137A099343146E3381AF1/",
  },
  {
    name: "Big brain",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2070010628969626788/D1F13F05C1BACE21088F63568ADBF6E5FD04CA50/",
  },
  {
    name: "BUDKA",
    logo: "https://cdn.steamusercontent.com/ugc/11393274323403576074/418A4DD9AF33BF2950249F2339D136B4E034AF65/",
  },
  {
    name: "Team wkwkwk",
    logo: "https://cdn.steamusercontent.com/ugc/2273821440504084696/CDC71883C359FC82587045811603BCC7856B5FD4/",
  },
  {
    name: "Croatia",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072129920/550C31F04BBA6FFD70B1A64A880629CA4E33AF04/",
  },
  {
    name: "PISHITE",
    logo: "https://cdn.steamusercontent.com/ugc/13821796120640921908/305701901BAEE67E5394E31D89DB8DD9BCC64B0E/",
  },
  {
    name: "Habla bien",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2299718312687698973/9B24DBC5E563E56532A92CE5FD82A08E9888D5C1/",
  },
  {
    name: "HIBERNATION KIDS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501270246902031765/FE2F336FBCD9D8A57C822B85195A430389173D4E/",
  },
  {
    name: "Mad Kings Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2303092842326955239/F9894AE423FE64758ED7B79CC8D01D2CE1304A6C/",
  },
  {
    name: "Romania",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2052005325255229060/B1EC6A08683806058483C6CD7349093A53936C03/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2536172773837508157/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "IHC",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2067757007450984921/A2C88E02AEB6336CE6069B321F12B3567F448C7A/",
  },
  {
    name: "Hokori",
    logo: "https://cdn.steamusercontent.com/ugc/2273817764862395533/4669EB60CBE75674BC738516919F5C53A1BD148C/",
  },
  {
    name: "Buff Buddies",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2312103211678765641/A32FC236384824DABF7202ECBEA04340D4FDE233/",
  },
  {
    name: "Hokori",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2273817764862395533/4669EB60CBE75674BC738516919F5C53A1BD148C/",
  },
  {
    name: "Cyber Reqeedrs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483264091721439824/2A23CF2CE46A65B373E55C8E5922083A15F1C3DE/",
  },
  {
    name: "Night Pulse",
    logo: "https://cdn.steamusercontent.com/ugc/2120691978813536022/D54ADA120728AD6C06A144112CD2CBADD130DF4E/",
  },
  {
    name: "Kohzens+4 ",
    logo: "https://cdn.steamusercontent.com/ugc/766022928255082690/F54342DA4E29A1F5A55D453088A9F3E4C1DB7834/",
  },
  {
    name: "9Pandas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2130823898434878953/0E6907505E949D601D21BE65C65E4CC4128A0FC0/",
  },
  {
    name: "Neon Esports",
    logo: "https://cdn.steamusercontent.com/ugc/1905612771137210708/67688ED3000B1B2140DCDD96275E114F3F9F3BC7/",
  },
  {
    name: "BOI BANDIDO",
    logo: "https://cdn.steamusercontent.com/ugc/13751148263347689596/70251CEF844B738E0837F9B32963AE48FC016C4F/",
  },
  {
    name: "MOUZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2422445207190317022/0CA2DE6B80DAAF96DEE78553FC36421E6CE40E36/",
  },
  {
    name: "Low Skill Dota",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/93856368661844419/9033C40B9E2016AC8F12D61A87FC1474DF049F86/",
  },
  {
    name: "FLIPSTER TALON",
    logo: "https://cdn.steamusercontent.com/ugc/16993496185238442896/AEC83EE01F7ABD5F64CE99CCECC2AD4D9B311221/",
  },
  {
    name: "Team Nepal",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333481984/E8A7C04040AD2E8099BF43A20D0D825B6DD9A579/",
  },
  {
    name: "Continuum Esports Gold",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2322236310849425697/686F33B72DBF3E9FDF36FE7036B81C978AA2FFE6/",
  },
  {
    name: "Frogs Fighters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1809890087276481575/6CF30CCE62C8F40997C07F7A8105DEB9F6AD8C42/",
  },
  {
    name: "Flow Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2310976136782820326/68351CA075BA89C255A559DF31B16EB5020553C1/",
  },
  {
    name: "Teiko",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503522680644957299/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Party 2 play",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2058754425397012764/2289CE5784ADE7A8A36E0CE49EA8EF00B34C94BD/",
  },
  {
    name: "FeedBerries",
    logo: "https://cdn.steamusercontent.com/ugc/18245459982687578360/C9B5FC77A8D02CD819655DEB7947542F26C891BF/",
  },
  {
    name: "CACHORROLA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029487745570321181/D17B77964C0DDA7A90C3454C84F9393DDE7E5A29/",
  },
  {
    name: "Mistery",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484377308966165674/D1C2E94FB792735737B2C153707F9E70CCDD0C6F/",
  },
  {
    name: "ZOL Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2263686345582586251/1A1A845270F3893A5F4F18BFCCAED85906E55FF4/",
  },
  {
    name: "█▒ Lǿ√ξ Àdأdà§ ▒█",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2116187745710646068/94C03DEB6DA4D93FFC5B5567232078F1606DDA95/",
  },
  {
    name: "Los Motis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2290706040604239828/0AECDDB891255E8D166D14EFF93EEC70860244E3/",
  },
  {
    name: "sinful heart",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518159379416777249/C8775B81B9AACD6DD360D6A7D283E7F5911670F1/",
  },
  {
    name: "Shinigami gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518149232230029748/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Kalmychata",
    logo: "https://cdn.steamusercontent.com/ugc/9778333874809493866/FCE5C9D7B1B43F47B99CAD77891E28F6F0422DA5/",
  },
  {
    name: "LvLUP MarsBahis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2423572288630574209/D82718C14ECEA8B0E52C5D7C2AF9B23D303AC2EE/",
  },
  {
    name: "Team Flamingos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2012592343389084886/FC416174A0205AD3109E774D73FF4C5FF9157B30/",
  },
  {
    name: "MAG.Yolo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475361870269126492/758D39EF6CAA611B0B6B7CEFAD7158A38C9DAEAB/",
  },
  {
    name: "Riftwalkers",
    logo: "https://cdn.steamusercontent.com/ugc/12923546594089256981/434C6430FD0EEB9E3AF7BAEF26647B47B349ECEA/",
  },
  {
    name: "MAG.Yolo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2465230668241678955/700DB41D40B7BCE2DEDA786E061023CB94C5583F/",
  },
  {
    name: "Natus Vincere",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/36.png",
  },
  {
    name: "Manta Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2478749260055361941/F4D1D80AB29862CA0C957DFAD1456CBE98483F27/",
  },
  {
    name: "Nethercore",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/53577969669103022/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "MONTE ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297461440058922936/44B6C46F1F48325340342CDC065F119E5103C75A/",
  },
  {
    name: "MOXORT SPIRIT",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5963399401529798379/AA466512462F314310160198C2B5E8D5D0AB250E/",
  },
  {
    name: "SVINUSHKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2448362707414393564/829ACAEA982B37509A19E516B18123CA9743052E/",
  },
  {
    name: "No Magnus Team",
    logo: "https://cdn.steamusercontent.com/ugc/2029485208088162535/65555E9B1CAAC829DEE838F671D0C9765917D44F/",
  },
  {
    name: "Gaimin Gladiators",
    logo: "https://cdn.steamusercontent.com/ugc/1850419664501191993/5DAAB68FB5604D29E1792A0F35E74B3FE3F3A026/",
  },
  {
    name: "Les Baguet",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1794100072120733520/8E2F7975189CA66EABF4941EACB8D493853B9D87/",
  },
  {
    name: "Team Hot-Dog",
    logo: "https://cdn.steamusercontent.com/ugc/11113418816823688395/1D2DF6E7380CC6ED8A7E0820FE5F52E653690CA2/",
  },
  {
    name: "InterActive Philippines",
    logo: "https://cdn.steamusercontent.com/ugc/2027237398680799842/956E1BD2F9D917430D3813A799CBFBAF443F169F/",
  },
  {
    name: "GenerationZer-",
    logo: "https://cdn.steamusercontent.com/ugc/17554177084561921/A4F15A4BF583E750E901AD429D225D992DF4C0F5/",
  },
  {
    name: "dungeon masters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453040198080067/32F7078D8AA374AD08FA450A5471AD76CA46BE86/",
  },
  {
    name: "Marvelous Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289583009755688899/08ACDA39A18F8336DF6782B6D64A148F906D7278/",
  },
  {
    name: "Iconic",
    logo: "https://cdn.steamusercontent.com/ugc/2336874148079621836/0D68FF6101A523013C291DA6E6D6C99B80DDCB4F/",
  },
  {
    name: "Школота",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460744191127211547/38F2CB8A8F0A78A9BCAA703BB2F11191879F7A7C/",
  },
  {
    name: "crychic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/9664537488084060/6FDE65EA5840FDB5580A3AD7F01A1C66AD9232BC/",
  },
  {
    name: "Inverse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/771735886093198447/BEBB0FFBCBC8F01D2C70FB27B4B8241B648789FE/",
  },
  {
    name: "hidden pool",
    logo: "https://cdn.steamusercontent.com/ugc/29940249213260943/8025C2375DD5317D1C5F48705EBD9A532E1CE2CE/",
  },
  {
    name: "Ivory",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38943733604633912/47EF08FBD2435D6137E12364B9757558955403B8/",
  },
  {
    name: "OBNAL",
    logo: "https://cdn.steamusercontent.com/ugc/17197706578086160454/BFC960B8DE43B1C542B2E00BB6F5B0D86734B73E/",
  },
  {
    name: "PUFF",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1829018211839276579/097FA7129130CBBD178DB6AE7B49900D3D6D66B3/",
  },
  {
    name: "BetBoom Team",
    logo: "https://cdn.steamusercontent.com/ugc/2501271299873667086/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "Team Earth Agency",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2365022005358787063/774789D61822C3FC1E06FE69898F326590BCC6F6/",
  },
  {
    name: "Team Spirit",
    logo: "https://cdn.steamusercontent.com/ugc/1839179120711951766/CD7E0885CB527334205CC7885E9C101B7BC17702/",
  },
  {
    name: "ASAKURA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2416815707624215836/E25F61234D4234DABDC3EFD242F2E35A66A4A964/",
  },
  {
    name: "Teiko",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2290709938765811788/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "ToLight TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2415689807753448822/74C31929F4306F16002CE4EDE42EEADB8971FA9D/",
  },
  {
    name: "Team Business Spirit",
    logo: "https://cdn.steamusercontent.com/ugc/10904976496791995310/FAD1127239E810712347CC8744BA714084F1D7FF/",
  },
  {
    name: "Moons of Mene",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453126355272710/BBEACA67D4D9B335238EF19D260CCBBE47946199/",
  },
  {
    name: "Поколение чудес",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2389811413352305201/07496618990F8A5EFE1FBDC856B207DC771E5308/",
  },
  {
    name: "1738",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483261555778618031/5AF86660A89E30FDC8064AFA3CDB451C6B98A4F9/",
  },
  {
    name: "Понычи",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2513655779798241877/CBFEC34B46D3B2FB8CB91B8C56C45F9A0BD729BB/",
  },
  {
    name: "Team Spartan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2416815707626666569/C8D7EFEE7FE18F1F64E2644F72CFB3627C699A5C/",
  },
  {
    name: "ALT+F4",
    logo: "https://cdn.steamusercontent.com/ugc/9443910184679501657/71DBE09E7A3EDD3F687F1CDC2BBA11750C3DAE1B/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1880842325021945866/AD594D1C59AB23CF8AFD155209D477A382698B1A/",
  },
  {
    name: " Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492260595814433286/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "Twisted Minds",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441593112493017648/2CF737A11985595217CF576C9DCB365CEB5A74DE/",
  },
  {
    name: "Young Blood",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/37817742580312641/0F86FB73A751BB01038F2702B38A7927DDA1FD54/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/17105580886084848998/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "GHOSTIKLENOVO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452844504663398581/2A309DB15564B2F02C456AE85096AA6CF20CD2A7/",
  },
  {
    name: "казантип2007 ",
    logo: "https://cdn.steamusercontent.com/ugc/9631841552074708296/0C39C805CB1C1D7E1C340C6DB0AC4D2EBF91626F/",
  },
  {
    name: "Instinct",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2208513444010747311/ECC6A55BFCA811DE9C34D915F03489843894CC32/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2453989425923827978/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Pilots",
    logo: "https://cdn.steamusercontent.com/ugc/27683556135929057/AB53CD939FE761D45B305BE7F7F70FB852CD1759/",
  },
  {
    name: "Cerberus",
    logo: "https://cdn.steamusercontent.com/ugc/22062116229782825/9E995A8EE4D7326BCACB3BC80747A464413A1D02/",
  },
  {
    name: "Nix Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469746952470744023/C06961CDB754D5178FF7AB6F0187B8931A8D02A3/",
  },
  {
    name: " Overcon HSE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457366004083478893/C0F1DAA0BEF92B959AFB8F381F1C011DEAD7B035/",
  },
  {
    name: "Sand King Gómez",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453671042290637/E8DEC624439E9F0EA2236D2B75C6FDB79953B330/",
  },
  {
    name: "Somos Nós a Justiça",
    logo: "https://cdn.steamusercontent.com/ugc/38951882813950031/E0BC702CE1C18CCE5FB7A0BA7C2B006B21C04444/",
  },
  {
    name: "大鹏",
    logo: "https://cdn.steamusercontent.com/ugc/10473179644815584606/63926D2CCD823DBA684F04B4AC982E78636898D2/",
  },
  {
    name: "BEMOL AREA BRAN CA",
    logo: "https://cdn.steamusercontent.com/ugc/10656435965778411947/14A5A236AA22268D7DEF2D69FC3AFE2694F6C48D/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2183743008164046117/0DAD373C692270EDD550E406325004FBFEFCBA64/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473119197018002013/9F54FB2ED4476EA67C55994F5FB7CDAC3B882809/",
  },
  {
    name: "Courage Company",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451726211633407444/CCA6B294EEB44D863076A686BE79B477DB7690BF/",
  },
  {
    name: "пипяо",
    logo: "https://cdn.steamusercontent.com/ugc/2005841944292111036/F3F9758782AE29783CEE85A451D8D56AB8304C38/",
  },
  {
    name: "piggg",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475371098987005119/476696342A1E435E734307C2F9B397677907F837/",
  },
  {
    name: "Jubilados Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2279450940032849900/1AA10E6F910B3AEACA654FBBC53AB6451BF2A134/",
  },
  {
    name: "Army Geniuses Mansion ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2036229291620856332/487BA4B704ADCA08C99B4F67E0DF5EF3D2F4DFD1/",
  },
  {
    name: "Paragon",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2421319307264448034/310671263313C4D5D3E6E9C4BDC136B89637697D/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2374048814001843894/F4D0AD6C0EFC58DCF8DED009E4D51F25BE2DA05F/",
  },
  {
    name: "Los chulaboys",
    logo: "https://cdn.steamusercontent.com/ugc/1016069983876535158/24F9DE76ED85833C0E2CCC8D464F59881C9B9A2C/",
  },
  {
    name: "The Hut",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487756078158229838/56850090713A587DC30B9719385D07FD138708E4/",
  },
  {
    name: "Team Fist",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2023856976434181992/0855AB7E8B486AC7FB2037C9CD7AF9D8E4FFD346/",
  },
  {
    name: "Nethercore",
    logo: "https://cdn.steamusercontent.com/ugc/14543666506805145602/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "Twisted Minds",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441593112495798517/2CF737A11985595217CF576C9DCB365CEB5A74DE/",
  },
  {
    name: "VIPERЫ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/24301324302099744/51A47752F0D67B1DC7DFB81026AE49B7EC0F1C61/",
  },
  {
    name: "Literium Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505771943429541195/836899BDE381447D2BEF3DB5DB5A3711C49327DC/",
  },
  {
    name: "Avalanche eSports",
    logo: "https://cdn.steamusercontent.com/ugc/52462132003073399/A860D7023829D67CA8F4D03C52174752D581C159/",
  },
  {
    name: "Groomify",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40064469240084419/8CF768C88F04ED6AC59AC7C7DD76F89E335CB98B/",
  },
  {
    name: "HAVU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1833543457080341173/97E231A7DB51D0CA99DD8D8668835FBA8FE7B09C/",
  },
  {
    name: "Eagle Eye Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2504639701999663487/DD0095F9359328C658FAE75D431AF10A93E0CCD7/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2450594154253034785/79A4F257DE3F4D793378C18E65673A26AADB46C0/",
  },
  {
    name: "Pride",
    logo: "https://cdn.steamusercontent.com/ugc/28813175555250961/29CC53F7B06575F31080E00B97683F2E06CDF17C/",
  },
  {
    name: "НИУ ВШЭ Пермь - 2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2462976971270728181/222754EC12B48691BC6F46C2983008ECFCA5313E/",
  },
  {
    name: "SHAOLIN",
    logo: "https://cdn.steamusercontent.com/ugc/5097543432692536332/C3EA7D411BF1527BD6E77CB50C7BCBFD971F73B9/",
  },
  {
    name: "Dagestan Gladiators",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505772116908048577/1E8175EA165AA4A13230EDFBD420683350C8C260/",
  },
  {
    name: "Others ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/53574721552619959/7D9E3B9C2E0643FD69033C324708BBFCADB96A96/",
  },
  {
    name: "Zzs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487755008683503129/A26AAC1F663FE6CABDB99D41ECEED99B09203FB6/",
  },
  {
    name: "Devious",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/975477922440329319/EEDBC6BE5189591C0FF7003797B13D49F64D7634/",
  },
  {
    name: "Arrancars",
    logo: "https://cdn.steamusercontent.com/ugc/40072176443759989/1F0DD0B3B5D94F163E63426C5FAF9F8941D777BA/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/25438728953417637/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "tam_sme",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1830165414580693025/0490CB1A1C9A39BE4735653CDA9DF8270BE26CB8/",
  },
  {
    name: "Nightshade Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2005843699288525879/42248BF4F1E21ABD5854AF0A0001939E08BEA6BE/",
  },
  {
    name: "TEAM LOUCADEMIA ",
    logo: "https://cdn.steamusercontent.com/ugc/2059877529813328831/8A299931D9214C35776393623F5FF771000025EF/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2307594539199380450/B6552232247E395A06E70B98FFE372954ED7A3C1/",
  },
  {
    name: "Chain Lighting",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518159379416784501/365CCC76C9665F6FC90D534840565E5803FCBCAE/",
  },
  {
    name: "Dark Reef",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466367349810329578/ED221532039937B14A596B9538F6B9C6DDF3313F/",
  },
  {
    name: "Partizan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/581323629931887963/D797393567BBA77E0042076039FC245636341F38/",
  },
  {
    name: "Yellow Dragons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2092541945260050452/F082B787044F4A033E8AB04F7C64BE1DC9F82041/",
  },
  {
    name: "Wiser Warriors",
    logo: "https://cdn.steamusercontent.com/ugc/2477632689738982294/52F73BED281DF75257007811CA9CDF5144CB2B1F/",
  },
  {
    name: "BB Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501271299873667086/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "MOUZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2453977469313883353/584A9278F4834E081204E826BBF8A00FFAAD3F99/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2444970812227471953/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "NonCladem",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2104928746643555522/B5CE50C74BC2B6955A7D1AA167F1399460E63F90/",
  },
  {
    name: "Order of the Night",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2313228809149560387/9FBF02975222A4F7605414A9CD3487957B84B6A2/",
  },
  {
    name: "RUSSIAN FISHING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484382382226793931/6505531B79B70BB28041B347613324F3113CBEA3/",
  },
  {
    name: "Team Falcons",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2314350571781870059/2B5C9FE9BA0A2DC303A13261444532AA08352843/",
  },
  {
    name: "Лесная братва",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2093669747583492605/559BC343648FECDDC91B5F2C37320CF87B3F9BDE/",
  },
  {
    name: "Georgio Armania",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/20923624581499776/E77AE002A693E78058DA96587064C6DFD61F897D/",
  },
  {
    name: "Iconic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2336874148079621836/0D68FF6101A523013C291DA6E6D6C99B80DDCB4F/",
  },
  {
    name: "KIBA ARMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2425822274344383759/70DB7394C4E7BF7693655F2DFE8493B41267A796/",
  },
  {
    name: "EYE Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2003571938580599854/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Veritas Brothers",
    logo: "https://cdn.steamusercontent.com/ugc/16854187426116328158/8A89D395C5AF832A6DD3AF017C09E6551A12DEB9/",
  },
  {
    name: "ZOL Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2263686345582586251/1A1A845270F3893A5F4F18BFCCAED85906E55FF4/",
  },
  {
    name: "Valkyrie X",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501276587782301545/B93D4C2CA379438D407890CA027ED7CD945B358C/",
  },
  {
    name: "BTD ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2015962364036107395/C6D15102B8943896B6F444B152E1C1CF5FCC54BA/",
  },
  {
    name: "Shinigami Gaming ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485513355579569698/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Bonde das Waifu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/31061255852060622/027B4ABD4C175FCE8933DD476E86D03EC1802BDD/",
  },
  {
    name: "[WS]Hold and Hit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2305344642059888070/356EF5A340C7F0F12FA330BFBCBECB2E91FC45F2/",
  },
  {
    name: "Apple City Gang",
    logo: "https://cdn.steamusercontent.com/ugc/59211109393007839/ED4381159CECB48C6FC7C54A5B3EEE7FCA3A54FA/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/13231489339242563570/2AC5B96BC7A0A7EC1A0A7F3C6C7553D9BA4DD523/",
  },
  {
    name: "1nter t1de",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2345881890120100654/9604950FA3E3FADC85E1E6C4F7C3B1F714B50F9E/",
  },
  {
    name: "EZ BAKE OVEN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/438364144692246051/48F1E53EC2BD5CAF6CFE03795876D0C9E8637383/",
  },
  {
    name: "Elevate Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2450600311727141987/D39D9A417D974630BFA31A161C4221DDB2C72223/",
  },
  {
    name: "Inner Circle",
    logo: "https://cdn.steamusercontent.com/ugc/14250781848748396056/64DDB27F8A50FEA6869CFD8392ED29CE674E26C1/",
  },
  {
    name: "X`GHOULS",
    logo: "https://cdn.steamusercontent.com/ugc/28817515688218618/464A84FEAB3C2C23D09FF3C913888D9A7B9DFACC/",
  },
  {
    name: "Team Secret",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/1838315.png",
  },
  {
    name: "ВРОТОБОРЦЫ",
    logo: "https://cdn.steamusercontent.com/ugc/16933502614763310637/F052FEA7774D0931665E6B2CA3CA755DF4CD11B1/",
  },
  {
    name: "Equisde somos chavos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1827910574771249710/7D8F9013F3C25ADD92CD6ABFAEFA44319DC73089/",
  },
  {
    name: "Aurum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484388723422817520/17A43D08372ADCAB9E36F1D5719423F5ED876719/",
  },
  {
    name: "TEAM NIMISTER",
    logo: "https://cdn.steamusercontent.com/ugc/13054458442220009/9B0AD7B49DA11CFE48BC297418A852113E325A12/",
  },
  {
    name: "DOTAMLK",
    logo: "https://cdn.steamusercontent.com/ugc/527258867808552883/BA633C556B7891EFBCF83F75C5B1A9EBB4A83B0E/",
  },
  {
    name: "Korb3n Team",
    logo: "https://cdn.steamusercontent.com/ugc/16151152821662044140/501393F7A6CCF5432DE1082894799C866BF6C6AA/",
  },
  {
    name: "Whoops!",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/32187608913724579/D7B3805BD508A9D5E7D6609D86F47AE365E9F772/",
  },
  {
    name: "KUKUYS 2.0",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2453988791679025351/801DDD227A2677A72F286FCE8D249B818C76D43B/",
  },
  {
    name: "Шымкент стайл",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/838142317656459215/AB6D1FDC064088154AA9BCEE2731D5353D91595C/",
  },
  {
    name: "START+",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2310972872042845383/5A061ED9EB1B4752D15E853FB7D650E3D4CBE9A6/",
  },
  {
    name: "OLD.G",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487745499245253940/D6BFADFC4247AD5BD429E856B02C1AE997926554/",
  },
  {
    name: "Nightshade Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2005843699288525879/42248BF4F1E21ABD5854AF0A0001939E08BEA6BE/",
  },
  {
    name: "Runa Team",
    logo: "https://cdn.steamusercontent.com/ugc/23189918875091243/4CEBD73D73236BCAC62F16D2D432532CC2A5D1F2/",
  },
  {
    name: "Titan Strikers",
    logo: "https://cdn.steamusercontent.com/ugc/1883094772998200750/B3C96731E7DC2A2F2FBC12845A1C307112F1F389/",
  },
  {
    name: "Azure Ray",
    logo: "https://cdn.steamusercontent.com/ugc/2298587339939886506/26FF6DD1070476EAF1C69DD30B259FBB197F0256/",
  },
  {
    name: "ILS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5972406600791708896/CBBE3810EC48BBC4EF737A454D101EEE2B34D4FE/",
  },
  {
    name: "Titan Strikers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1883094772998200750/B3C96731E7DC2A2F2FBC12845A1C307112F1F389/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/28817056372840819/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "NAVI Junior",
    logo: "https://cdn.steamusercontent.com/ugc/2909225722380320/5C6EFC9004093ED29E9B48242DE79418BDDBFE30/",
  },
  {
    name: "747 Live Dota",
    logo: "https://cdn.steamusercontent.com/ugc/2189373145594606878/1769AD939A3861D6FC4292C37FC63E5C50EC6D3F/",
  },
  {
    name: "ZakaZnie",
    logo: "https://cdn.steamusercontent.com/ugc/2486631010791120322/DA803B8779628F400D30643F41978E1EBD42CF86/",
  },
  {
    name: "Order of the Night",
    logo: "https://cdn.steamusercontent.com/ugc/2313228809149560387/9FBF02975222A4F7605414A9CD3487957B84B6A2/",
  },
  {
    name: "5STARS Esport",
    logo: "https://cdn.steamusercontent.com/ugc/2242291164382237649/90B081947DB8290E3F7539CFF56AFF9707E4E51A/",
  },
  {
    name: "STARПерцы",
    logo: "https://cdn.steamusercontent.com/ugc/14418138681325708791/5273462D6082AE20F568B9BA9DE28B8B5814A61B/",
  },
  {
    name: "Team Spirt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2276068615998701342/14A4A951810BBBC86C603082B8197055B80C97F0/",
  },
  {
    name: "MentalBoyz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430341182003674099/F4A29BD109EAF24779476F61620509B5375BDD45/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2376299796522859727/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Vegetables Esports Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/393300247867219962/31D4D7F70FA5DFE293D91A105BFA4B929E832941/",
  },
  {
    name: "Team Paytool",
    logo: "https://cdn.steamusercontent.com/ugc/11056046846253930218/C7B54373E94055D563E90472139AC4727B425E11/",
  },
  {
    name: "Fiery Bubble",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/287475166293075627/0E60C04F2863AE9FDAAF4281F16594D424F42E91/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2328992979091438301/45E0734610736BEC6A48549F46CB64F13E8C734F/",
  },
  {
    name: "Kalmychata",
    logo: "https://cdn.steamusercontent.com/ugc/16792627669272117786/9B85127BD0E307964978CF8F706B5A39EADDDC93/",
  },
  {
    name: "Looking For Sponsor",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470872217334917999/501582CB3D0A7657E2172134F641C00834CD9E7A/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2466364897897467068/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "MAG Garuda",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508015499651721547/4BD158A64664FBF39026DF35E2409296E7BAA04F/",
  },
  {
    name: "GALETO TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/11238021991159036574/B52BA18D6D516EED368821F175F219358ADC7F4A/",
  },
  {
    name: "BrownBoots",
    logo: "https://cdn.steamusercontent.com/ugc/16501682230125990177/389FD095E91913D4D9154E69D8A68EC6AB23B917/",
  },
  {
    name: "МГАФК",
    logo: "https://cdn.steamusercontent.com/ugc/2031736116034979471/1A61C034BCF52896F2AA0421D033716923CA6880/",
  },
  {
    name: "TOXIC TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/1908988554144828055/21F5207FA69BBFDEAE66FC1A852FBCFF09FCD140/",
  },
  {
    name: "Чили перчики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501271793810206560/94657EE7F1F55377D0D1E0D70DEF04E1BE75E55C/",
  },
  {
    name: "AU REJECTS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508023918738003544/BBA7521240D6BD5A237C9FDE32D0CB1203AA01D0/",
  },
  {
    name: "Team Maia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2406697281776863571/200E819D508045A1D664392028E7290CF09D2E95/",
  },
  {
    name: "Mosquito Clan",
    logo: "https://cdn.steamusercontent.com/ugc/51332980296330393/9A144E05BCCD5282005F6B7B8B9EE17A38BF8652/",
  },
  {
    name: "nouns",
    logo: "https://cdn.steamusercontent.com/ugc/1861686187975269057/6E221E0B04CCB4AEF93A3FDA4DC7873A1BBAFAE2/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2422446471782880749/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Império do Forró",
    logo: "https://cdn.steamusercontent.com/ugc/2492271925727099813/6C22BD22498C1DF530B28D23D949BF3EFDEFCACF/",
  },
  {
    name: "500 Bananas",
    logo: "https://cdn.steamusercontent.com/ugc/22061656932194534/59407A4C3460C06AC44BD55A0ADA0E5721B7E55F/",
  },
  {
    name: "Capy Baras",
    logo: "https://cdn.steamusercontent.com/ugc/5173159098656530/AE09659867BCDCF48610B41263F39422D3C3B808/",
  },
  {
    name: "HYPERPC",
    logo: "https://cdn.steamusercontent.com/ugc/10847303021101833363/60E5D2D0E273E69BFA87B30FF4AE107B1831B7EF/",
  },
  {
    name: "Bulgaria",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072129781/3B683E7F3BC4E87F94A04971DBADD605CD8E11C4/",
  },
  {
    name: "Wiser Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1986681444713706353/0575A4710A74492DD73284E0218084E9EBD39C20/",
  },
  {
    name: "Team India",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333484771/1FAE41B5BAFFA26DA5EC7B0D01EB2E10DAF49B12/",
  },
  {
    name: "Myanmar",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336571109/4BA38CF82A408C538EA2A4034F3913574567D8A8/",
  },
  {
    name: "Fantasy Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1814393308114867522/59563CB473C950901D12EAAF91F1375395442B75/",
  },
  {
    name: "HEROIC",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471984170520125054/B066431AF4D322D300DD5180CEC8F6BA0E85A7F5/",
  },
  {
    name: "NoLimit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419082182920046273/F71D76E3E36BE5F8CF2877D2ECE918D0B8ECF607/",
  },
  {
    name: "NIGTH FURY ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2312100041512672419/C9EE490ACA9FDA28A57AC187E5FE88E24BFEBFD1/",
  },
  {
    name: "SOSATELI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5829421107745849841/3824A0E183E8C9CC73BC7EA0254F55E9A1DFF1CE/",
  },
  {
    name: "Bloodskal eSports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2009198592031297562/8719202BE2E579E4112593F8F76EE7F5C352C504/",
  },
  {
    name: "莉中爆栗",
    logo: "https://cdn.steamusercontent.com/ugc/1973168564557274713/498871534A400453B94CC461703DB82F7286BF7E/",
  },
  {
    name: "Team Vkid",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486641247034693934/104A41F20F06C8C818F989971C3962D2BBA32FC9/",
  },
  {
    name: "Bia fecha porta",
    logo: "https://cdn.steamusercontent.com/ugc/1747933010802619116/E8162688918C41D6EC617D23503143AD2F9C0F75/",
  },
  {
    name: "Thunder Fury",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2272693544795408085/0A7F50963EC7751C8E9AEEAE3215C04D483319A5/",
  },
  {
    name: "The Meme Regime",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/487894227404313490/2A591A6BFAFD2D7044825E4050A11B6669C91374/",
  },
  {
    name: "46+1",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/97220919351983855/1465427B989E9E79388A842BA1275644E4BE3719/",
  },
  {
    name: "WWW",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547430415549716110/D83C145638A316005B1D383F963C0BF08C136B6F/",
  },
  {
    name: "GRIN Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2001317420616485713/858FEE24286C9D1CDC77AF3D5F3BDAADEB89D2F9/",
  },
  {
    name: "Loucademia Elite",
    logo: "https://cdn.steamusercontent.com/ugc/777374168908002451/A4D54D853F5A52969D15814F38347959BA7F534E/",
  },
  {
    name: "Edge",
    logo: "https://cdn.steamusercontent.com/ugc/51336781790124562/E6DE03B2E727C47E408B9952552BE56FF4B1E432/",
  },
  {
    name: "TEAM EZ25",
    logo: "https://cdn.steamusercontent.com/ugc/54712126540349604/166F6321E002B43155498E10649A4BEDD5BFD490/",
  },
  {
    name: "Mad Kings Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1841423145079450083/4209E25BD49DA5449EC30B6279E4F14B4FCA437E/",
  },
  {
    name: "Dreams Come True",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/49076833990102335/6C39E0796D43DAE59A3395B68F7E37ACC53362A7/",
  },
  {
    name: "MilfHunter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2504654287519794690/6A0A62CF00160C8130AB8870918568D8FFD27F47/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474243666702634607/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Головорезы Fntzy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2011455597255285850/75388A617FF412B027B2340D587BC342C696F88C/",
  },
  {
    name: "Ronaldinho el Mágico",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1812148164460278302/3DA60F436F439B381D274EB0CA3BBDFD1F8FDA7C/",
  },
  {
    name: "Party 2 play",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/22050704706470085/4CC18E87912231150E046F6C4F43B7446ACD0E91/",
  },
  {
    name: "Bad Rexon",
    logo: "https://cdn.steamusercontent.com/ugc/2502394419242633035/91F87C9CE345D62BD06763868D84206D482C8F91/",
  },
  {
    name: "Zetta Games",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11916971571356279/B0C37B91F613F16C2F3C0339D6F0F31A0D05665A/",
  },
  {
    name: "Modest_Flies",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666342498722/08E37CC7DC2C39D40BCF7850EC41CCDC910E31B2/",
  },
  {
    name: "Evil Monkeys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1856057400288391441/0E579A7E954F9DC2BF35EA463B385D85FBB9FFF9/",
  },
  {
    name: "Rakuzan",
    logo: "https://cdn.steamusercontent.com/ugc/14172984088870282/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "Team Attractive",
    logo: "https://cdn.steamusercontent.com/ugc/10791705627112711/E978B8EF1072D01EFACB4336ED22365F89336B9F/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2510285689491362623/05380239030278EE27617FF04D2AF2D5D454DC07/",
  },
  {
    name: "Madness Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2459599271570687180/AE39F01A89620DF8DFD8AAEF390D1299B6E9F937/",
  },
  {
    name: "Factory worker",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2474238502439370608/FFE91C506CBA67D473F23C58D86238B6CCBAE849/",
  },
  {
    name: "санитары леса",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483251409048803906/8A6FA47612463C283591F198955597345AFAF7CC/",
  },
  {
    name: "Business Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2518151211081909317/069C7E7A630A8FA333ED65FE72820D4091D24953/",
  },
  {
    name: "korban team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2526040044843147069/813DF635E1A65AFD0321A453A89EAD210E659AA4/",
  },
  {
    name: "KromsateliSmerti",
    logo: "https://cdn.steamusercontent.com/ugc/50203276507718768/0F3D6EDDE71BE3034E829E1D87736081E7F8CE2F/",
  },
  {
    name: "Bulls",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2300841854478940861/C15D149A72980F60C2A8D3E05C3A563B34A7D5D2/",
  },
  {
    name: "STARFAll",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1999073232332155630/8C14E890B5CFD5537EF6E865A5C9820E25B19E26/",
  },
  {
    name: "Shizokids",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2047490891201051046/3C89C6A8F14B56D32A9716130288C860BC8A808B/",
  },
  {
    name: "Veroja",
    logo: "https://cdn.steamusercontent.com/ugc/10871256311592060576/ECB4FD44B3E5AD6343F7121F9E5EAB9F67821727/",
  },
  {
    name: "MandelBrot",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2285077174178905555/FE4A39888DA4C06AE68C4209841E86B75FC03CA9/",
  },
  {
    name: "Ninja Bros",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490006266229881150/FC90CF44B6F55976119A8FD30C519F435E6D2270/",
  },
  {
    name: "Western Wolves",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446096712105180450/BA9CE23C1F0F48D31A6C168C58A3E958272C0D66/",
  },
  {
    name: "Acatsuki",
    logo: "https://cdn.steamusercontent.com/ugc/2532781589097934051/C24F4F764719959A21D7F58688E146F8F982E521/",
  },
  {
    name: "EYE GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487761350958509664/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "business club",
    logo: "https://cdn.steamusercontent.com/ugc/2455117864631601557/069C7E7A630A8FA333ED65FE72820D4091D24953/",
  },
  {
    name: "Demigods",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468626847904737278/9FA85C07F81C0C5665D936AC128F60AACA7FB6E1/",
  },
  {
    name: "Chicken N Friends",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63715343003484482/7D58C042498908E4492490C2EC7A6FC1C6284070/",
  },
  {
    name: "team India-miracle",
    logo: "https://cdn.steamusercontent.com/ugc/12838328711488206240/8BD701124FB05FB9B646CE4149EDF42E85C2F3D9/",
  },
  {
    name: "Team Open Cur",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2190499045513715818/7FBBB7844773EE889D7A7719CCB254381878ABFE/",
  },
  {
    name: "AVULUS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473124652167869322/5F57C84859221BB685425ADEF4C3B7DCF63DBFA8/",
  },
  {
    name: "Bur1za",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2151092033074067392/1C4142EBB4417EB6D51907E631793DDD3A9A2DAA/",
  },
  {
    name: "PARIVISION",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476508692281774105/EDE870E88FFD1C4E01DE40BF1B5E548D3459D046/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2386432261331571069/C4555A5D77DAB69ABEDFBE433072D8C8131BC555/",
  },
  {
    name: "Palata5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503515705580609996/E5A0C6A068C7A08529CB4A6D35333347A13771F2/",
  },
  {
    name: "LOS QUITA VENDAS",
    logo: "https://cdn.steamusercontent.com/ugc/2019331250266609366/4BA6612A6702C91D154953A74C3AC926149A8EFB/",
  },
  {
    name: "5rune Eaters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2106052996910381453/F54C7A528EE86479D6806C059519C5229121DC52/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2447215901184818950/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/9827167283239488671/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "rakuzan洛山",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2269313216566211817/84712C22B4BBF1166DA79DF3D5D27D27FBB230E7/",
  },
  {
    name: "HunterZ",
    logo: "https://cdn.steamusercontent.com/ugc/14051640035563278162/2B06BD4CAE8D52F24918DDAB98A3DCD7794D84B1/",
  },
  {
    name: "Prodigy of God ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2522660617403005641/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Dominator Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2462995990957961039/828D5F1736EF5378419C9219B252F65B9DFAE546/",
  },
  {
    name: "drago kings",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2450611091976564407/CBD1D81CAD02E82C0E8D63C21F855C053604EEBC/",
  },
  {
    name: "1w Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2395438284279848677/DCD7C12478E276346140846AB8EB0B5759351744/",
  },
  {
    name: "Team TPABOMAH",
    logo: "https://cdn.steamusercontent.com/ugc/17006308113334639887/078D12EBB5187E9A9F68DA04B746B3A78157829A/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/62585168918977929/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Dulo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/11924678141042588/850DA91C998CC86034906F3C7C2EF17B3E3FB5F5/",
  },
  {
    name: "shinigami gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455105361957661049/8496CF4BEDE0E957F0186EFFB4DCE89DEDBA9517/",
  },
  {
    name: "PNIPU",
    logo: "https://cdn.steamusercontent.com/ugc/2515898701074400390/98FBE5AA1B73D1AE12E9A775AECE0083A7E62421/",
  },
  {
    name: "EGIRL FANBOYS",
    logo: "https://cdn.steamusercontent.com/ugc/2510263591506898541/911B74C282EAA441AC4D6614A38713AB7A5A984A/",
  },
  {
    name: "nerealnaya zalupa",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2056496209165562413/13427DB697767A9C540C349A826B66A1FBBEC2B6/",
  },
  {
    name: "Nova Pulse",
    logo: "https://cdn.steamusercontent.com/ugc/14957676909853784322/CFAAF12C155D813F1A550D331DD6BAF02CDE0B66/",
  },
  {
    name: "EYE GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/2529416016835596361/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Dandelions",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467481203432719761/E89DCFA4818337F6A89201F33728683ACF375F72/",
  },
  {
    name: "FuckerX",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493390850503407718/685D91FE52DFD1226E205A5D7A13145207E38DFB/",
  },
  {
    name: "KAMAROTOS",
    logo: "https://cdn.steamusercontent.com/ugc/921255349137860208/CBF7EECBEA177873B182335C75DEBB24C3FF104C/",
  },
  {
    name: "Sustancia X",
    logo: "https://cdn.steamusercontent.com/ugc/50204544126357822/ADF6F163767D4A5241ADF221C2AAB445BBD1A838/",
  },
  {
    name: "Empyrean Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2261437081962092926/B8312FC9B6E6DBF0B5DDFC72D909AC685C71A8FC/",
  },
  {
    name: "Vitality Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2041868205277029496/6A965540C6EAEB062C4D1DC5E02ECC8209AE3D46/",
  },
  {
    name: "Universitario eSports ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2515898237696790021/2401629660EF0224DCA1258751FCF5D46B244337/",
  },
  {
    name: "Team Bars",
    logo: "https://cdn.steamusercontent.com/ugc/5972406600795248476/F4934CEADFB2D2493B8A200B2733DB3CC9B8EE6D/",
  },
  {
    name: "Tiririca Club",
    logo: "https://cdn.steamusercontent.com/ugc/14039676058292370915/64D8B7A514E5494E109E83DAC47F3977CE21C278/",
  },
  {
    name: "Bikini Bottom",
    logo: "https://cdn.steamusercontent.com/ugc/43454214455564626/065D1E3555FD996C83C72E59C3C070662F436801/",
  },
  {
    name: "EYE Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2490011247841414836/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Carstensz Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2056501732702586195/249112747B3394B5222936EAEAC258436EE15AF3/",
  },
  {
    name: "YatoroFaN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488881628767904498/DD46D80A023DC1B617DD3F9C321AAF32932DF469/",
  },
  {
    name: "4Pirates",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40063200203716112/E22FF04FC0EFD4D3F4B9E1570A8570F664A863B2/",
  },
  {
    name: "OG",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2586976.png",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497882400467970348/6CCADF5F1FEAD53BE069B0427D6D75F9598DA3D5/",
  },
  {
    name: "Kohzens+4 ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/766022928255082690/F54342DA4E29A1F5A55D453088A9F3E4C1DB7834/",
  },
  {
    name: "Krusty Krab",
    logo: "https://cdn.steamusercontent.com/ugc/9909479364073162327/9C09D0B37F135F92B95D63BADC2C12F82CFCA1FA/",
  },
  {
    name: "Aurora Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2529416016828320142/E277C75D4E5B793D5A0AE7E901FB21A2239CC73A/",
  },
  {
    name: "No Bounty Hunter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1770445790631666790/6A55BB6F2B6A8FB2749EFC543A65475001653454/",
  },
  {
    name: "Looking for Org",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/51327907334606511/D1DE8289313290A02D1289BCC3B9FC69BB2ED23A/",
  },
  {
    name: "Plintus.Pro",
    logo: "https://cdn.steamusercontent.com/ugc/1754735193899763385/25EA60033CE2D918C083B62E702A10CBD3EB1AD8/",
  },
  {
    name: "te1k0",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1795240954877666631/3C77A7D4FE46DF5D75B5CD3FA152AA39677C5743/",
  },
  {
    name: "EYE-Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2003571938580599854/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "BOOM Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2916748038054832/52C6F6228C73CDB6855C04B64FF21D061D2C15A9/",
  },
  {
    name: "NDS",
    logo: "https://cdn.steamusercontent.com/ugc/12792526193001504140/06337ECC0BC36C4953401BF3E2390F1347F097C8/",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/4035672220644196/46CEEE89389CD322BFD8DF653F17EFF5586BEDEA/",
  },
  {
    name: "Courage Company",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2348132642595439332/CCA6B294EEB44D863076A686BE79B477DB7690BF/",
  },
  {
    name: "dota 1 players",
    logo: "https://cdn.steamusercontent.com/ugc/13471042328147038566/A1AB976F42173DD24FC99754303A334C5D48554C/",
  },
  {
    name: "Ninja Penguins",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2321110410943510446/9E5FCD7F361FE09E5F98520D435ECF6642680AEC/",
  },
  {
    name: "SF POS 4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2490013150803496020/31AB5A8809CB255159042B132D7754D1360277D7/",
  },
  {
    name: "Modest_Flies",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2305344642147355835/213CD0D68501C784BD85D172A9CBFB9964213699/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2301966006998536832/291392C9DCF12CA61D67F36BD2DC7802F5D61199/",
  },
  {
    name: "Phoenix",
    logo: "https://cdn.steamusercontent.com/ugc/9481051752365240268/3611AFBB1FD13F84F860DCDB5572F11B1F938EF3/",
  },
  {
    name: "ShadowSpecter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2524912417389436442/F928FE27452EE465B18359AC616F90E6719A126A/",
  },
  {
    name: "ZONE GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1702911348382813488/1E829562AA36351C90C9B45B0E3B935939D7A70D/",
  },
  {
    name: "Great Pudge Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2089164498487926019/0578093DB6243B60E5252B4AEB64939B8B817F49/",
  },
  {
    name: "Atlantic City",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/6286925440682736/0A0325F4F81634061CBCC2559F9E599B3BDE59B4/",
  },
  {
    name: "Poland",
    logo: "https://cdn.steamusercontent.com/ugc/1772752763577900375/085AFF44DDEE1A0B1F7670C6532F11B6CD6E4D30/",
  },
  {
    name: "ThunderLab",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2377407244595660701/846E8D7A392F7933FE768774A2A8C7C2787BE388/",
  },
  {
    name: "Surge Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/11941792546296493786/1486BA99EF9FC3F15FE98697BF2FF322634DCB92/",
  },
  {
    name: "Business Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/13043505443697882/130FA56742842E4F9C5CE430C3F515F4C8233AFC/",
  },
  {
    name: "барселона",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2018219867197449561/D76041C12D8033C57F69DA57E5C287153C3C8DE7/",
  },
  {
    name: "SuperNaturalTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/451867334607613721/659FC88314200D4BE70B5E5CC15611844CA52EE2/",
  },
  {
    name: "Tundra Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2031716132171967904/07B168B8063D9B22CDAD53AB421ECAF3D4B2E07E/",
  },
  {
    name: "Arduina Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2443858865672553325/B760F62EE9CE170C49BCACA98DDF870745C861C1/",
  },
  {
    name: "Lords of Kaizen",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/640993785469610641/3C1527FC3FB0AD337858DDD5D14AD97F49CB5676/",
  },
  {
    name: "HELLBEAR HEROES",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1832426636071471178/000ACC2A4ADD9D3EBA21A1A4556FCC192415B318/",
  },
  {
    name: "x5 Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2062124990905724494/F34681B7B2AC8A7C0F810D80B6A1DCF1862A83A8/",
  },
  {
    name: "Rakuzan ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508011791702531444/3B59FAE016A3A820155F0CC7B38ED454CA57ACFB/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431453855826492339/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "TENET Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2306473078267372487/6340817F292FCB52D1FFF1546EA82DAC6037AACF/",
  },
  {
    name: "DRINK TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2398817794648679674/C50C901C699F76545A8033D04061A8F63171A425/",
  },
  {
    name: "Australia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130556/AEA76B94B268BCA2AA6330C1FBDE68D43B173098/",
  },
  {
    name: "Cloud9",
    logo: "https://cdn.steamusercontent.com/ugc/2399941883261718982/81DE19B3FD9737B5F16C725D3FB7E72251BE2A81/",
  },
  {
    name: "Раки в атаке",
    logo: "https://cdn.steamusercontent.com/ugc/15782834637576073570/BF27FB1E1569B7A09310F40DCB4D7B65824105A7/",
  },
  {
    name: "Team BGSX",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/785254758086093334/338BEA5E61181A4BF25DEE2298920C379C9B2CCA/",
  },
  {
    name: "Pandawa Lima",
    logo: "https://cdn.steamusercontent.com/ugc/2303092842278565017/1235611A27F926EBB58B9E9FAD0C68A86C8143A6/",
  },
  {
    name: "Team Warta",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2506901649379826774/C0E3D04F443B466ABA01269646D9780C3DE7DD63/",
  },
  {
    name: "Meteor Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2267067515299632905/B9D9271DCE75D671F208A92706A43A78C4716F64/",
  },
  {
    name: "New.era",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2044113417914989770/79114DCDD37DAC38A82A1E77C4869BF502CBA2B7/",
  },
  {
    name: "Team Pakistan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333485519/7841F22BD2A691175C50D1F25DE961EB2B793792/",
  },
  {
    name: "Xtreme Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2023835418754383891/3449F2F94858E332CE6FAD2C1160E3657EF33ACD/",
  },
  {
    name: "WelcomeToRussia",
    logo: "https://cdn.steamusercontent.com/ugc/9667873295139933/AD201BEAEB1AA6F39CBE7901F0F86B04DF3F21F3/",
  },
  {
    name: "Yakovlev eSports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1907863287675337269/61EDAA0CACDD5F4DE1DEE6BC062EDBEE62A7136F/",
  },
  {
    name: "Grills Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460725171473178710/76233821BE9D2C66103731AFD69B76BEF0D32736/",
  },
  {
    name: "TEAM TEWOOP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476506789821031936/A3403A7B53A4C354F0A030D67052DDE8E1A23539/",
  },
  {
    name: "CYBERPSYCHOSIS",
    logo: "https://cdn.steamusercontent.com/ugc/12867323256890974388/C0AFFDE4F7754C57AD21FB970E7118EEBB515396/",
  },
  {
    name: "歼星炮",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2288454873913336041/EEC2BAC0CC8017D37EF8E4AB4B82A0C24047DCFD/",
  },
  {
    name: "Night Pulse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5934125925437240488/7F61A317DE8806A765F3F6B1780EFA7E7D583D27/",
  },
  {
    name: "52",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1892100151007802438/D77889CD7659F401559E501935FC5459F9158D75/",
  },
  {
    name: "Team Bars",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5972406600795248476/F4934CEADFB2D2493B8A200B2733DB3CC9B8EE6D/",
  },
  {
    name: "North Macedonia",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072130085/98C8EC0AA6D8EAA642EC7DF556A75370340DB344/",
  },
  {
    name: "Vladik Shashkin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2233283241978233430/6D784CF901D5D4A9D447952FCF022227FA203ABC/",
  },
  {
    name: "Uzumaki",
    logo: "https://cdn.steamusercontent.com/ugc/2466356199630889718/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "DMS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496762207911159099/B74AA7BD9C3BFAF7FABE05E2833719A5D9A3A386/",
  },
  {
    name: "Dame tus moneditas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2013706759556946886/100025C77AB6E0B70CACA377E435FA17C5E2C972/",
  },
  {
    name: "Nigma Galaxy",
    logo: "https://cdn.steamusercontent.com/ugc/1827894588975105240/421C0D8318D71D5DD31FD08A7933AB622AE26590/",
  },
  {
    name: "=RaStaMaN=",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/3314960402923787949/82A0F5115AD68B886895E80D1D17B55A502257A2/",
  },
  {
    name: "Palianytsia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2457368030825596326/3E26DACF6945405F3E5B3BBCDF63E5E2961B3008/",
  },
  {
    name: "Go along",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2176988246610576867/62E1AF670B8FB5DEA3C35F246AB87ED995D0EFBF/",
  },
  {
    name: "GG WB",
    logo: "https://cdn.steamusercontent.com/ugc/9403231633722265266/30BAA03821B5A3F958B0A006586533DB5AB616B1/",
  },
  {
    name: "Universitario  eSports 1",
    logo: "https://cdn.steamusercontent.com/ugc/2515898237696618441/2401629660EF0224DCA1258751FCF5D46B244337/",
  },
  {
    name: "RRefrain Team",
    logo: "https://cdn.steamusercontent.com/ugc/17509225849040759408/EF34B9E258088833B8666DD1EC302A7D93B8169C/",
  },
  {
    name: "Team Exoteric",
    logo: "https://cdn.steamusercontent.com/ugc/14851294411284503884/7AB756BEFDEA7A8B2AE1E6707B9D106729814D4D/",
  },
  {
    name: "Crew X",
    logo: "https://cdn.steamusercontent.com/ugc/2068882429938837131/68A44FC4EE83B8F88C4BEAF8E71F22E55A21409B/",
  },
  {
    name: "Team TK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503517607381353329/C937EDC464DB1339DE75FA5C16ED57FC7C57E137/",
  },
  {
    name: "Team PeeF",
    logo: "https://cdn.steamusercontent.com/ugc/11748536801683324571/42807C6C2A0D8012652EAF26F508C4FCB352F6C2/",
  },
  {
    name: "KOZUHA Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2113936579357895410/803FC68CD817B5F83806779C32A01A2320514904/",
  },
  {
    name: "Team India",
    logo: "https://cdn.steamusercontent.com/ugc/15788409343360611557/666D51C867D06317A712BC9A10CE6F4AB1338CBA/",
  },
  {
    name: "NoWay",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/260469602562446388/1F43FBDD260CDBB8B324CDE834E3E2AC1CA28AD1/",
  },
  {
    name: "Zavod 161",
    logo: "https://cdn.steamusercontent.com/ugc/11824126542649166851/3855E7D108AEC00D628AF8E57CD4BC47F682E50A/",
  },
  {
    name: "LEVIATAN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2476496009610060553/805B58DE6A151FD0946F26A8181F711AB38FDD9F/",
  },
  {
    name: "Kalmychata",
    logo: "https://cdn.steamusercontent.com/ugc/13329217524731729694/724EF09FAF6224919318517F9500369D8B33DD5D/",
  },
  {
    name: "Winners Esport",
    logo: "https://cdn.steamusercontent.com/ugc/13047310511873160/E9033561FE50244C732AFA030106E348D36B2C33/",
  },
  {
    name: "Silent killer",
    logo: "https://cdn.steamusercontent.com/ugc/2431453582272336330/5CA27C9845C6CB2F21DF0776E0155ED13942CB44/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8538725260156450/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Kiba Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468627392934682504/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "jelly fish",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/34441311435930016/B1720E46A73EAF3B9422AA3834E0F42752AF3FA4/",
  },
  {
    name: "Ninja Bros",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2356014576868000304/4459E23D624747A3B0F3A02A8CA372EC53C13A73/",
  },
  {
    name: "NAVI Junior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494508506331433699/C258C4752510A57BD36244696ECF51E2BF97969E/",
  },
  {
    name: "RuleBreakers",
    logo: "https://cdn.steamusercontent.com/ugc/2499004593285468560/01903AB32A1A1ABA9E501DEFB8744F3328F39D52/",
  },
  {
    name: "Wombat Cats",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2403319584228634989/97C2B98206D11B5E40C7D0FFC6C4A49E9CF7D598/",
  },
  {
    name: "Rem's Isekai Adventure",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2217521366435635646/C8AE8E68E0354336BE6695EE3361A3D1150F0C5B/",
  },
  {
    name: "Invoke.Pantheon",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441607065856867806/5C2FB25EAD5BA61034A0463A91499BDFC0707268/",
  },
  {
    name: "K(P)FU-2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5976910200407294387/E915E5EF07822AAD19CB9F6B14D58099AE8B6593/",
  },
  {
    name: "плывущие бублики",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483251409048803906/8A6FA47612463C283591F198955597345AFAF7CC/",
  },
  {
    name: "wdd991",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2184868908047982516/EAAABD77D49F4A292360A819056E16494C214E02/",
  },
  {
    name: "Water rune enjoyers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1829027181294818530/D5E9F7A4421B9888E1A410C9A42DFAFA1DEEEBA5/",
  },
  {
    name: "Lighting Legends",
    logo: "https://cdn.steamusercontent.com/ugc/11175974543063526108/78AD251D0688D17927FD7C7A4F40CB11A30F50BF/",
  },
  {
    name: "Big Bobbi Centre",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2107177466686296990/B1315D76A96F56B48A46C650CB04A6AC45A24044/",
  },
  {
    name: "MERCEDES BENZ AMG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2512529879895178249/2E9153B7DF33E00CE918E9F61F64DDA5066A1248/",
  },
  {
    name: "9Pandas",
    logo: "https://cdn.steamusercontent.com/ugc/2485502666697365913/234C3E0EDA6A8E315DC78A5EC2C6C1FBB1DD6657/",
  },
  {
    name: "WalterGaming",
    logo: "https://cdn.steamusercontent.com/ugc/2406699727554456846/5DDB8C57BB9850AA01BB02D2008114CFCA7DE3F7/",
  },
  {
    name: "Throne Breakers",
    logo: "https://cdn.steamusercontent.com/ugc/12206708967120826071/904ACE306D6B15DA5FECAA567588E994794670DA/",
  },
  {
    name: "CHOPAN ESPORTS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63713530913222262/D96B80E3A8BC60032863C1AFCFDF4A2E46B6D3DE/",
  },
  {
    name: "Arduina Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2415706293255582191/703FB532CD23C485051361714D608177623C3156/",
  },
  {
    name: "Crimson Reapers",
    logo: "https://cdn.steamusercontent.com/ugc/2920730817435265/46D90D60F76A869DC1AEE222C9F766E57A7D9296/",
  },
  {
    name: "GRIZZLES",
    logo: "https://cdn.steamusercontent.com/ugc/2301966942354579036/E2955209251AF52C6488241A7419826E8B988DAF/",
  },
  {
    name: "WOLF",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/808871845690242632/549BD21BE95A99C62297DF9B1162D371365B0721/",
  },
  {
    name: "猹",
    logo: "https://cdn.steamusercontent.com/ugc/1781756251369273831/4F9B14B8A6C0E1B90E555B740FA8A643C1B1FB4D/",
  },
  {
    name: "Caterpillar",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/50197568401430383/300DD76806077190CE4EFB322605738DFA00C6CF/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/26556371895243836/2463CD2FDC05838CACEB66AAE27F597798C40B34/",
  },
  {
    name: "Night Pulse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2120691978813536022/D54ADA120728AD6C06A144112CD2CBADD130DF4E/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/53576717525691316/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "NextGen",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297460714235723712/C5A29045B2C71D719B0CDDD84CA0D71A4C543485/",
  },
  {
    name: "Ninja Penguins",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2315479698889336598/3712468CE0A0F4A04A5BC0F7E6C9A5CCDDF3381A/",
  },
  {
    name: "«444» Squad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483261555751237752/8444746CA8F12036A07FB6A2237C3F0A45A14D42/",
  },
  {
    name: "Silent killer",
    logo: "https://cdn.steamusercontent.com/ugc/11169884631211835997/A8E0ADB37F48F7A4D75FBB098B28CEF6A0FAD033/",
  },
  {
    name: "PERRO NEGRO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/54705607056144633/E514C1D183858145DC51D1412D6DE5ACBCF13F73/",
  },
  {
    name: "Team Hryvnia",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2398818428207435332/95A521BB2150BB7151046E3289637FA1BF28441C/",
  },
  {
    name: "Студените",
    logo: "https://cdn.steamusercontent.com/ugc/2451738894326862300/CEC5C9CBAFF2BBE5E0733B950A1733382B13793F/",
  },
  {
    name: "Тавер Снесли",
    logo: "https://cdn.steamusercontent.com/ugc/18152064931326072984/D2FFA99CFD2464F525F10493BACC9B7232E6B7EF/",
  },
  {
    name: "UNBOTHERED",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2305344642136517519/701D13DE21DB0AACAD397A4D97D0ACA7F4C89C90/",
  },
  {
    name: "Team Jurassic",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1892091893999633922/D41232612B6A6C18E51AE203DF7E0DA0856F3F28/",
  },
  {
    name: "复旦大学日月光华",
    logo: "https://cdn.steamusercontent.com/ugc/24315184021315084/9BFE2FDF9686C1C303F6F1EBDD46190BCAAC3E70/",
  },
  {
    name: "Dim Yri4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2484390626376617612/ABC47E0CEAB175B39709CDF78A16362E4413B8FE/",
  },
  {
    name: "Egoists",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/61461640624306881/FB997DF0CFF87EC865A76C420273C18595095232/",
  },
  {
    name: "1w Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2385306361427679719/DCD7C12478E276346140846AB8EB0B5759351744/",
  },
  {
    name: "Ivory",
    logo: "https://cdn.steamusercontent.com/ugc/18432353497487538810/441982EED700973C3520B932447038EC71DC8BB9/",
  },
  {
    name: "2Girls1Puck",
    logo: "https://cdn.steamusercontent.com/ugc/2508018669568558127/5A6361E753CF7964858EFD241D6F1785BC381F0C/",
  },
  {
    name: "Eat WIth Boki",
    logo: "https://cdn.steamusercontent.com/ugc/1012693415431886663/BCE3A041228D162E10EC3A7B6A55BED1DB15C689/",
  },
  {
    name: "Team wkwkwk",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2273821440504084696/CDC71883C359FC82587045811603BCC7856B5FD4/",
  },
  {
    name: "NoLifer5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/9672147470531741/5D10AF2881C568586CF2CD8DD33210F16B6508E6/",
  },
  {
    name: " Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464117452936549041/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "OZZMA KAPPA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1951776845200438611/567C4791ADDE27DA5107C489AFC39736A4156792/",
  },
  {
    name: "The Immortal",
    logo: "https://cdn.steamusercontent.com/ugc/2363896044787382613/22481094AB9EA0ACC639C483812E052C15820186/",
  },
  {
    name: "Aurora.1xBet",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2306473712159641505/EF8BF65A7919F2DAB02AE016E40E3D88F2F5ACAF/",
  },
  {
    name: "beastcoast",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/824632623398435452/85EA3FC27708076F8ACC2E5B70E25EEC72B09CC6/",
  },
  {
    name: "MiracleGeneration",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2398822869398278407/56CEEF5EFD964668B7B7060C134BEBA1E0B283AA/",
  },
  {
    name: "TheShiniGamis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1930373852687939015/A74BC19ABB1EC83C095E1DFF3429285D6B0B48AE/",
  },
  {
    name: "кириешки",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2541800915855159542/27EE378FEDE5C9C92B2F74554E60AA7FBFA35F40/",
  },
  {
    name: "No Bounty Hunter",
    logo: "https://cdn.steamusercontent.com/ugc/1770445790631666790/6A55BB6F2B6A8FB2749EFC543A65475001653454/",
  },
  {
    name: "Kastrula team",
    logo: "https://cdn.steamusercontent.com/ugc/940592907856369588/344C4C68E6D9923E788D4A7ACE1B803127474BA9/",
  },
  {
    name: "REVOLTA",
    logo: "https://cdn.steamusercontent.com/ugc/2476494829504609260/CA734D46518336373A427706E5D76EC3449147F3/",
  },
  {
    name: "Okak",
    logo: "https://cdn.steamusercontent.com/ugc/15985307100583909017/0082B5153343883138949E4AB45FB02BB28DA97D/",
  },
  {
    name: "biota",
    logo: "https://cdn.steamusercontent.com/ugc/7420982235285044/7996BDC94E07A7B6FCA86C6973E73C4EE94E8090/",
  },
  {
    name: "Be'eX - ojea - luiz + bidu + pedro",
    logo: "https://cdn.steamusercontent.com/ugc/789753150627246412/78C5D5CF9CBE5074FDD4F2002194052F92230719/",
  },
  {
    name: "Team Blade",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2111684146076477333/F1FC152AF5583CCA9726459D8F23107861DCF8EF/",
  },
  {
    name: "Team Invalid",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2522662979069332364/2CC5130EE2BAE6327C94821A3274BCFDDEA01072/",
  },
  {
    name: "KUKUYS",
    logo: "https://cdn.steamusercontent.com/ugc/13045104181371437/C445E37E9F2E3D1D0C7C04246ADD56F02EC80AE1/",
  },
  {
    name: "StormSquad",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297464623510608729/A3790432083AB6760B291CD7AC435C82B9A27E13/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2492270657680171854/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "CoolBassный завод",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2050878574189651178/86DF072C4E4B7E4A36869D1F222EDAB71CBD20B5/",
  },
  {
    name: "Terrorist Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2075652812744699999/EC686D5354EB889EAADEB7DA9EF3E580BA53F288/",
  },
  {
    name: "Purple rush",
    logo: "https://cdn.steamusercontent.com/ugc/8547515806223945/9E0BD6C539DD97CED71CD89083D6B55A2EC97AA2/",
  },
  {
    name: "SashaPavuk",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2300843038275890421/6DE7B2E99F5D2C0A797EFC8A628BC84C2C8AF2A0/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2546305872357785832/E228DDF5F2F0AB670945CC00351F32BB2644ABDA/",
  },
  {
    name: "ЯЧЁ123",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2438229366060143830/2EB7300CC3F21CF7B8B14808C19C899087E5B3B8/",
  },
  {
    name: "BadBoy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487753828927992314/EF3238D7066F37F2C2046E6625B59C8724819941/",
  },
  {
    name: "Nemiga Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/1761446291384253796/DDD9E9CE3AC50467578944F685C4BD84ED0285B7/",
  },
  {
    name: "Arkosh Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1776075393077245987/8C7428056DA2E7039C2311A74B4BE9D788137F0F/",
  },
  {
    name: "Team Bangladesh",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333490243/C226E1E211612F92BF1CA475668DE10A12E7F633/",
  },
  {
    name: "S1lk Way",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475376451987269456/19F3FEFA6368A1D1E9E087872C8A14A021951EEA/",
  },
  {
    name: "Elita",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/98351890452780021/DDF070EF2573E705D318CCF759DA9D68627A990A/",
  },
  {
    name: "Voditeli_po_gubam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441584873051335936/B2F755A029695D293475B2EE71AF68EBA8A8C0E2/",
  },
  {
    name: "REAL ECLIPSE",
    logo: "https://cdn.steamusercontent.com/ugc/2412313289525493186/FD5993C92A7CD4DAB88FB14DB2E360CFF84FB935/",
  },
  {
    name: "Dragon Esports Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467493249717162257/D34CF87168F0C0C6D8BC4580AE02C84E732AEE3A/",
  },
  {
    name: "The MongolZ",
    logo: "https://cdn.steamusercontent.com/ugc/15306258279627134/5CF37B243EA29123F5626C18E0613CA749D36730/",
  },
  {
    name: "PSG.Quest",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481004682513190539/324F8847AD21944686DED20FB3E2C0DEA4154AE7/",
  },
  {
    name: "Vingar de Leve Rola ",
    logo: "https://cdn.steamusercontent.com/ugc/2423592667289202762/231A5FF103C65CDA6F68D9003DF4264A1D616AF6/",
  },
  {
    name: "Easy Gaming Junior",
    logo: "https://cdn.steamusercontent.com/ugc/12187973586307845314/84BFD039C5039BFAEE6F78FF31F652BDE2D76A96/",
  },
  {
    name: "NextUp",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289583009773318666/C52B99377AAF023282EB555ADE0E097EF3D690E9/",
  },
  {
    name: "team Cringles",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456242493963883517/5C646E7CEC5AFBB41E2486E5AF9B6AA7A7A2135C/",
  },
  {
    name: "Air Defence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2417958726624961451/B735C35337F59604BC717BC7E2FDFC3B09080C6D/",
  },
  {
    name: "BULDOZER",
    logo: "https://cdn.steamusercontent.com/ugc/15211449477990013289/3A113B8FD31E7ADE39168DC04BD745FCBF6413C8/",
  },
  {
    name: "MidHell TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/2000210408380507559/00E10E2C8CF72341F5CF65B36A11F4DB7AF29A4E/",
  },
  {
    name: "Kladovka",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2055379004104193364/614AC7672C30243D6EC66529D39549504DDDF930/",
  },
  {
    name: "Shadow Avengers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464108573202955954/C8A072AC6C8364B0FBAF92885C3A552836315CFC/",
  },
  {
    name: "South Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2256931711614599008/51E420EDD53064B84222E349385894626A0723B5/",
  },
  {
    name: "Blacklist Rivalry ",
    logo: "https://cdn.steamusercontent.com/ugc/2050860821377863997/BAE16F709F0AE46642FAD3366C78FD92FD2FD741/",
  },
  {
    name: "Team Den",
    logo: "https://cdn.steamusercontent.com/ugc/53588581603583302/D6A337DDB250A20844C6B491666FC23AB7BCF178/",
  },
  {
    name: "Wildcard",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/14173210407158797/EAFCC9BE14FBFC9DC1EA3D03D62772D38F7DF15F/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481005951544693874/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Team EGO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468626124703302989/1F76671EAA5DA638672B463EABE7AEFDBBEFB889/",
  },
  {
    name: "Legacy Eagle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456240591493284936/CAA2CCB6F94717BD99A8B451BC2D312BC735114F/",
  },
  {
    name: "Team Chicks",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2448348511915761126/9C9D289E409F0E02D08EFF2C73FE9D0F9A43F589/",
  },
  {
    name: "Group Team Nyx",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/443952327067152512/B2C880469D845C1E95D82877DBBBA50EB8910131/",
  },
  {
    name: "nothingtulose",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/842591058098937318/E38A842673FB64F5F074AF1AE42F4853C2971701/",
  },
  {
    name: "Turkiye",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130441/564D64028B647C5A0AB8568E2497E0ED141653F8/",
  },
  {
    name: "ZEUS THUNDER GOD",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1832426636071192128/298F144FCABFB502E6C9FE1DA66F61D9181A0C9F/",
  },
  {
    name: "5Strangers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2038492407328886146/698B35D1984E5633566BE8B3D7EC6951E8C153ED/",
  },
  {
    name: "BAKBENZIKA",
    logo: "https://cdn.steamusercontent.com/ugc/15660100677693938991/3BB2D9B2E5F1CD9D58CBD450B383BB188CE6FBAF/",
  },
  {
    name: "Night Vision",
    logo: "https://cdn.steamusercontent.com/ugc/2460727068613839643/35E9953E42B26F1F51DB7285BA04DC200FC27A76/",
  },
  {
    name: "PSPinfo.ru",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/882982437249098141/7EC687125DF02B88179B111BE56E3ADCC612B116/",
  },
  {
    name: "NIGTH FURY ESPORTS",
    logo: "https://cdn.steamusercontent.com/ugc/45702212725896517/829587C2EEBBB8CA950998896FAB02F3E3AFF456/",
  },
  {
    name: "Team Disasters",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2250172464201707799/4DA817F2DC2D71C67B8893F12604B20751BF0C22/",
  },
  {
    name: "nelo angelo",
    logo: "https://cdn.steamusercontent.com/ugc/53579707143784703/73336AE38BD9B9ACB84384B9EB49E63999839C36/",
  },
  {
    name: "KARAKOSKARAKAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2318858400556614400/70FC8A54CF980870EEF6BE577518AD39D4D03775/",
  },
  {
    name: "Eminence in Shadow",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2103802298693836136/A1F4DA07FBE05575A79C30E1D7E50918BDCC0BC1/",
  },
  {
    name: "Night Force",
    logo: "https://cdn.steamusercontent.com/ugc/17968260980523334862/4AFB4090FE5B56377C9EB918E05F8BF9DA5167FA/",
  },
  {
    name: "Team Bobr",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2038491084593840343/B8007AF65882427625C66CB2BE9A75EACE38811C/",
  },
  {
    name: "Savage Return",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/44571121447482661/B6A9B0AF5836A4776CDD9E0EA21A0D2F905A469B/",
  },
  {
    name: "CSC",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493396646161771208/A95D9F3A6CDF993446DFAD154F726F3EAE253223/",
  },
  {
    name: "x5 Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2062124990905724494/F34681B7B2AC8A7C0F810D80B6A1DCF1862A83A8/",
  },
  {
    name: "Shlepa_Family",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1849307355720756436/396B9614AD669E3F61E392C1EC5BE4AE919B6D26/",
  },
  {
    name: "ZOFFT TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/13959037405026641049/D040389D162573CF2CB5220C88012D2B7A8B5A8C/",
  },
  {
    name: "PSG.Quest",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2071150481767505896/DA60BC040B93FB7F584A8FB9A041EDCFD23038A9/",
  },
  {
    name: "Skyline Gaming Community",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500142617316269183/A08DD0C121340B6490F7F19BB16CB8D59772D12B/",
  },
  {
    name: "Veroja",
    logo: "https://cdn.steamusercontent.com/ugc/15988102788752245829/5019D873E90E0B0DE504BEF80EA690D4A4F3921C/",
  },
  {
    name: "Wiser Warriors",
    logo: "https://cdn.steamusercontent.com/ugc/16915675334385514153/1BF96EB83A5F9BD1DB63CB356D75A67698BC4FFB/",
  },
  {
    name: "The Honored Vanguard Veterans",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2312102036687704561/28577717107B14CDEA300BA7EBC3C803C938057B/",
  },
  {
    name: "RuleBreakers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2381910274691177839/01903AB32A1A1ABA9E501DEFB8744F3328F39D52/",
  },
  {
    name: "TeamPogrebnyak",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2113935398636144996/847234F8A30F31934913034B68FB11A97A419971/",
  },
  {
    name: "Quantum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/20928609852688055/0849AECACECC6072D174D581F1610EC5C842B297/",
  },
  {
    name: "TARRASQUE TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/2369545214004008146/A71E488C88FF72B97C207CD4928613817C959809/",
  },
  {
    name: "gubina13",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2014846607480327763/5E1F53C9A08B478AA9BFFA8A8A7CA41B24ABF8AC/",
  },
  {
    name: "SV1N",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2494521822579914654/7603DD37C60128802BDDE1B9E54040ED9BD942B8/",
  },
  {
    name: "老干杯",
    logo: "https://cdn.steamusercontent.com/ugc/1823390989352724078/58CF5405A86C00A1C11012FF0ADA5A536926610B/",
  },
  {
    name: "team feed",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500139907648619830/CE7CAE67E90CF2786E701C198E55C91ABB479859/",
  },
  {
    name: "Nethercore",
    logo: "https://cdn.steamusercontent.com/ugc/2442732965763263237/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "SentrySymphonyEsport",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2417958910675842445/5863A1AD30F7AA10BE13989BC4EE69C7AC2BCB72/",
  },
  {
    name: "Red Rabbit Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485514623315621064/6054FE2C79309D8B49093FE8F4FC1F65D548309C/",
  },
  {
    name: "Team Warta",
    logo: "https://cdn.steamusercontent.com/ugc/2506901649379826774/C0E3D04F443B466ABA01269646D9780C3DE7DD63/",
  },
  {
    name: "Critics Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/51327454167488583/A6D06297CA3C85CCB82EF84EB41EE6530C762150/",
  },
  {
    name: "Team Essence",
    logo: "https://cdn.steamusercontent.com/ugc/49079912444971129/EA506824463B73C57366214CF965C02FF801A999/",
  },
  {
    name: "Grey",
    logo: "https://cdn.steamusercontent.com/ugc/12716268300004209166/75B143DF4B6634B973F1379EF4D61E51D4B0BC8D/",
  },
  {
    name: "Refraction Gaming-",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2192750845298917115/83FF8EA42BDDB10883F879AD1D0EEBCBA23A1EDB/",
  },
  {
    name: "Bloodskal eSports",
    logo: "https://cdn.steamusercontent.com/ugc/2009198592031297562/8719202BE2E579E4112593F8F76EE7F5C352C504/",
  },
  {
    name: "Team Spirit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5086284433679925968/72FAF911AAABE0528195881CBF20008971B2CA10/",
  },
  {
    name: "arbuz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485507648209252735/18966BE80FECE06759090B1D2D0C60B5FD5EB8A4/",
  },
  {
    name: "Ivory",
    logo: "https://cdn.steamusercontent.com/ugc/18056828430213131275/4F94167F713A16857C15C4BB9ABB7E33B0F8CCE6/",
  },
  {
    name: "ВОЛК С ЛУЗСРИК",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2527165944750507252/4FFC0FEE5B3FF1F4B3A8CFBD8C18C24054402350/",
  },
  {
    name: "DemiGods",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2109432346272393261/5D02E4493B1E9373C84054C315FA87BCB54A0C66/",
  },
  {
    name: "Hagreed is good",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/433821478391211246/82A9EAE3576EB19B29FF1A74F1B1EE46F9E07E00/",
  },
  {
    name: "hashira team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33316776998739032/622B2706C842F4A35ACEB08163A6DBF32B968341/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2493386410232285294/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Nighthawk Elite",
    logo: "https://cdn.steamusercontent.com/ugc/29943415576848611/131E01288D855AB06566F51369BA70721C9B52A2/",
  },
  {
    name: "Demons of Paradise ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470858270643074811/1EED60EAFD99B6AF6C45A514AE59CE4DC2C48E53/",
  },
  {
    name: "KICKYUTA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40068908267057728/D39B7E9A52E8BCE7B9C5B3E6A8E87B8B4093130E/",
  },
  {
    name: "Guga Drink Beer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452866064844411487/210B99F0793651B8E10741FF31B4082FB77B4545/",
  },
  {
    name: "Клининг",
    logo: "https://cdn.steamusercontent.com/ugc/33316777004212515/C49A270E7B55783967BCC497C3C116BC7C297789/",
  },
  {
    name: "Shopify Rebellion",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/39.png",
  },
  {
    name: "Nethercore",
    logo: "https://cdn.steamusercontent.com/ugc/17777674265630330071/79D0D159903371DC20501B6507AA311EF6FAFE86/",
  },
  {
    name: "Nova Divide",
    logo: "https://cdn.steamusercontent.com/ugc/13891607536878211495/4519F77C4375BC1CCCFDD476E4AAD067584FDE58/",
  },
  {
    name: "Zetta Games",
    logo: "https://cdn.steamusercontent.com/ugc/11919673112782701/789554566EAFA87519659EABDBFE03DAC8BF9A4D/",
  },
  {
    name: "BetBoom Team",
    logo: "https://cdn.steamusercontent.com/ugc/9995426432403529725/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://cdn.steamusercontent.com/ugc/1812159972016009901/2463CD2FDC05838CACEB66AAE27F597798C40B34/",
  },
  {
    name: "Domashnie Pirosghi",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2429222166868798344/71FF8726D54A1295AEAA89FF5285EEB4C9FE3033/",
  },
  {
    name: "EYE Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2510277446148294540/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Anyanya fans",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511404893028383437/50A9BFD1C2BC167161DA6BBE032DFA63C2248282/",
  },
  {
    name: "ledarnes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2133076877798977219/6CF6E93E861CB380C3E716A0F48C430A0017CD66/",
  },
  {
    name: "Xtreme Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2402194226059610590/E3CF4B6C4B2CFB974A9B415141E4A37317AD4D80/",
  },
  {
    name: "Чиназес 52",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477623360147856111/F1AFF6E6798501EA00012CBC4E60685B76ACFB23/",
  },
  {
    name: "Near Is Xerxes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1781731233443897282/D7361D895FB92AC894563198EC0B061E243AD031/",
  },
  {
    name: "Training Camp",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2425823802336216685/34601B1DD7A5C6C1FC3FCF1CFEBFE86CFD99B106/",
  },
  {
    name: "Bruv123",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2464121890863035592/69CB2CDE8B7290C49DB92F16EE84811F3D6F7278/",
  },
  {
    name: "TK Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2482124966988859721/95174DA6C29612C3D9DB4090F6050EF99F94B199/",
  },
  {
    name: "[TNA.PRO]",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/943957890197987877/C4F3943B5CFA690F1C2C0E2977D87BC7832FCDBE/",
  },
  {
    name: "Virtus.pro",
    logo: "https://cdn.steamusercontent.com/ugc/34447015205836647/F5F0B39A1483B26EFFAB587AC05EE23316821BA7/",
  },
  {
    name: "Raiders Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/31067412450844084/972B0042EA95A31DE33B5BA4C8241CC71A8ADC29/",
  },
  {
    name: "Ahui Team",
    logo: "https://cdn.steamusercontent.com/ugc/18254691935040700137/E1FB4F547FD593AD2EFE937B8E825AC3DE62A1B8/",
  },
  {
    name: "AVULUS",
    logo: "https://cdn.steamusercontent.com/ugc/2484388089175887648/AD2555E0F8E1783B66E6A3F88D0D3481E11BDE2A/",
  },
  {
    name: "Gaspar Me Engravida",
    logo: "https://cdn.steamusercontent.com/ugc/39739506748824228/FACED25DD86410AFC3B0B8872914941A9D87D306/",
  },
  {
    name: "Puck do JH ",
    logo: "https://cdn.steamusercontent.com/ugc/1861702026590104115/2819702F73470CBF3D9F4543CD8978DD0B0A2174/",
  },
  {
    name: "Yellow Submarine",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1629730806246774821/235566E96A053A4635B645D8070C4DB239E0CF0E/",
  },
  {
    name: "LFG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/29936677812232757/308CB1F41AD23A26F7C182A9B670C8DAF3127ED3/",
  },
  {
    name: "IGS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2546304515585290721/4A74377F457607B72D1E5F7417428985A2610B45/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2431468257629769817/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Ghost Sheep",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1812159972016009901/2463CD2FDC05838CACEB66AAE27F597798C40B34/",
  },
  {
    name: "Chompers",
    logo: "https://cdn.steamusercontent.com/ugc/9516516623765878518/B5B20ED080CCAAD0EF9B2B2F6CF557484E4F7FCD/",
  },
  {
    name: "SO FUNNY)",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2027224128687224637/5B3A43DAFCA59673EB92A7585025E29B24D5D9E1/",
  },
  {
    name: "rereametag",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497888107818139952/36119E06F607B944EF38672538E3FEF299296757/",
  },
  {
    name: "4Pirates",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/40069633511744783/9C571AE505645039D42EFDE4BC95F61725922621/",
  },
  {
    name: "Teamless",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/37817833697649139/E43DEC695C547D8F319E7F1434F428947826DA4A/",
  },
  {
    name: "XAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXAXA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/933804182308297638/32C5878A7BE477480D196615E8C80C5DC4F950F4/",
  },
  {
    name: "BladeBreakers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2470876656804791537/607FF3CA0AC245FDB488365D936B255D9A9BCEE2/",
  },
  {
    name: "EYE GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511401616445008672/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/13906294149097281776/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Timebomb",
    logo: "https://cdn.steamusercontent.com/ugc/782983914005899103/25CD219C92709CC324DF099C92E8EC1B2892010C/",
  },
  {
    name: "Team trust",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2215268843448084476/69A6100E542108AE14E50A547A0E0A79C279A6A7/",
  },
  {
    name: "Universitario Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2447214592144114254/2401629660EF0224DCA1258751FCF5D46B244337/",
  },
  {
    name: "1337",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2460735398325542260/08C6F29434F4DB3DF66C75B3E38727717305205D/",
  },
  {
    name: "ПАКЕТ ДИКСИ",
    logo: "https://cdn.steamusercontent.com/ugc/14746541412977252578/4ED9DB452095CF4E12CECC06B86D2B529EB7ACEF/",
  },
  {
    name: "Latin Blood",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502398049780548274/E5A4C82785AE1F51980D6E52457AB9EFD6F246E3/",
  },
  {
    name: "Mad Monkeys",
    logo: "https://cdn.steamusercontent.com/ugc/2508018112053409972/A10316EBD20ECE720470ED4A5D07B3C6DDDC693A/",
  },
  {
    name: "Xtreme Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2553059739518526955/F2E4BF1ECC2975C513D4E0F4956F7D8F0E616A58/",
  },
  {
    name: "VitaPLUR gum",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5858694505716244284/513D49ABD9E8E066B47471A6B168AFEA1B636DDC/",
  },
  {
    name: "La H de broken",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1676994829675242040/AE7149E0309F6FE0C12495802198551C759D9820/",
  },
  {
    name: " Vonuchki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2481005595498691312/ED46E1451D6106713D0495D37C480E2FBE8FD21E/",
  },
  {
    name: "Nigma Galaxy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1827894588975105240/421C0D8318D71D5DD31FD08A7933AB622AE26590/",
  },
  {
    name: "ZH1END",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/955227220417955887/B432F0308DED7A16A4334FCFA6002EF491D74D31/",
  },
  {
    name: "meld",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/63707821969543168/9A97C973056936E372A678D9BEB257F60CF2A18C/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487760715917100000/ABAFF8B8AF274B92478B3692DD1C753CCF51CBD4/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/53576717525691316/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Happy Happy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493390850501303522/0E5C825D2F0C72392072E840E2DB0812F478E8FE/",
  },
  {
    name: "AVULUS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479883856026731461/3A2553DD7648B4B7C3FEC4A51395D8D136CD168A/",
  },
  {
    name: "AIM POSSIBLE",
    logo: "https://cdn.steamusercontent.com/ugc/56964553861799134/D829C246603C56B388110AD2D083F6C8FC87EDC6/",
  },
  {
    name: "GO E-Sports",
    logo: "https://cdn.steamusercontent.com/ugc/2451739529076404020/24E4FE03BD6EDCEE83E035E64B2054B7902D05D2/",
  },
  {
    name: "Yangon Galacticos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473119197018013407/9F54FB2ED4476EA67C55994F5FB7CDAC3B882809/",
  },
  {
    name: "TOXIC TEAM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2062133768656646467/0DC776B80F708E21F03277337CF7BBAAFBA07712/",
  },
  {
    name: "EBlacks",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1845926744718498813/C4B209A4CDB5611AAF3F35AD25FC02AF627C8F52/",
  },
  {
    name: "FART SNIFFERS",
    logo: "https://cdn.steamusercontent.com/ugc/2265941315494927629/82604DD67184ED8A7CF1738E74CA329DD9FADDEC/",
  },
  {
    name: "Hamster Kombat",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2473124652202482359/F2D493A68E44D7C302C8ADFDAF8FC20C497CFF6F/",
  },
  {
    name: "Tembikai Warrior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2316606177388432433/2632153A998F243C9B2F1CAD95F13C1A8306662A/",
  },
  {
    name: "botinok",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492256706492897398/D956CB2156AAF8C8A5367C36376116BB70CE3621/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2487760715922702548/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "Clarity League Ghouls",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2269319015195776332/41E84E601A56BFAA617FB0B865CA5FAAB19E2505/",
  },
  {
    name: "Randoms Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1799745823657793319/639D8F73559E3838F60014164335DB28032E79FB/",
  },
  {
    name: "NoPing Esports",
    logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2672298.png",
  },
  {
    name: "Estar Backs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8546247575522013/0940BE82E218C71369C672C95943445AA450EF45/",
  },
  {
    name: "ДГТТ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2047486293883344723/143E59AA3D17A2F907F0A1AC93B7A69C6F7FBF93/",
  },
  {
    name: "Mad Monkeys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2508018112053409972/A10316EBD20ECE720470ED4A5D07B3C6DDDC693A/",
  },
  {
    name: "Rest Farmers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441593112495798517/2CF737A11985595217CF576C9DCB365CEB5A74DE/",
  },
  {
    name: "12k Esport",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477616202157484841/79EB4A184D70A14E8A34A800381C63DD47C6AF97/",
  },
  {
    name: "MAG ID",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5967903001149279219/C2049C9028F12B8E7245E0E44DD86D645BCDB5F5/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497892547190342389/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Shinigami Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/15301647012547687/C12857D2734CBDE2305EBCB7FABFB66FC5D5C148/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2411202693609694073/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "EYE",
    logo: "https://cdn.steamusercontent.com/ugc/2315477275994102552/E82E61687F55C289FF8B259C54EC72167DC7A870/",
  },
  {
    name: "Accbuyer'$",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1834661403400417961/06C462CCD53AE40087951D4DB26D6876B94AA3B7/",
  },
  {
    name: "Elite Eclips",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5841806006844383726/B978A72E73E3091CDF6289034DA5A11024859C4D/",
  },
  {
    name: "Prodigy of god",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2380804214100888910/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "7AVAGE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2060999808810033722/AD6B81F5AE83398723EEE7DBB544BDC2216E78B9/",
  },
  {
    name: "Kerbe+5",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2437083355356077266/60AFAF5885186A4BB356041009A30F831617FF29/",
  },
  {
    name: "Business club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2315476471672988468/630288F96C4CB6BE1A045382D8638D0E93FC81BF/",
  },
  {
    name: "Team Tea",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547430239978515164/6195156BBE39D72AC57B87B8C859231D77B23034/",
  },
  {
    name: "全村的希望",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2258054943315779975/34AEEF251D7FE6ACCDBC45AB877F79064994D9B2/",
  },
  {
    name: "Night Foxes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2450599130315044875/FFA2BDEA1F29E0A06B69DB6D1C846DA75D672FDE/",
  },
  {
    name: "Foxy gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2050873742320252975/AC5A2097BEF04FD6D958B34C8A02A75C445ED58A/",
  },
  {
    name: "AVLNC.SNOWBALL",
    logo: "https://cdn.steamusercontent.com/ugc/15530528856298556335/88F6CE2E0C55D26BEF33EDE7AF23064114356A17/",
  },
  {
    name: "copeDAO Tanuki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2298592412797182673/99AA3E2A99E7E457B56B5D740C857CAAA16C7CDD/",
  },
  {
    name: "SnakeHole",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2536171416449518184/93E6C15D8E5CFB2EB4A68BFFAEA6A39898B1ED4D/",
  },
  {
    name: "Rampage Heroes",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1639829986623461193/AAC7FBBC34B3C128F68E9A787F85B04C107F5481/",
  },
  {
    name: "Randoms Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2416817187172584251/5E7AA2C4896A6EB1212B673B731DD9838ECCFB27/",
  },
  {
    name: "Zero Tenacity",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/23174701605135839/B5A052B86AE5F123031508603154EAD51013C412/",
  },
  {
    name: "Team Reflex",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503515705580128738/EA5C4DF732A77F35DAF43C1D03BBFE8C35259639/",
  },
  {
    name: "Dragon Blood",
    logo: "https://cdn.steamusercontent.com/ugc/14033790580502848804/1CF2060AE5A404AEF691C3180FF9CB522056149A/",
  },
  {
    name: "Dark Souls ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/523888779846780581/6AABB0D69CE0FFFCC41850C2ED7BA438006D5486/",
  },
  {
    name: "BlessinG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5805777210222063082/A17D47F5EC7E50352E0DB58B4016D8D4ADD2927D/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502382832092927234/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Студените",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451738894326862300/CEC5C9CBAFF2BBE5E0733B950A1733382B13793F/",
  },
  {
    name: "InterActive Philippines",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2027237398680799842/956E1BD2F9D917430D3813A799CBFBAF443F169F/",
  },
  {
    name: "Eagle",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2235535041767689955/0CA5AFA7F55E5F69F5E829B46EE127945F19DC53/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2485508282145075491/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "team fead",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2497890094876180962/ED3A155F105D33D0404B0D7CB53B4472BF478690/",
  },
  {
    name: "Team Bocil",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2428074074157516163/BB91BDE6B14CBB7AD77B9D7934EE49EFA7D4EC43/",
  },
  {
    name: "Malki Palki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468624856990499547/3CF9D685E958004D2E5E7E8364D266A5C73D60C4/",
  },
  {
    name: "Xtreme Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502396780731633895/7E0D955B2CE2D1085ED77ADAEFEBFD2A94F422BC/",
  },
  {
    name: "全村的希望",
    logo: "https://cdn.steamusercontent.com/ugc/2258054943315779975/34AEEF251D7FE6ACCDBC45AB877F79064994D9B2/",
  },
  {
    name: "Air Defense",
    logo: "https://cdn.steamusercontent.com/ugc/1996819597310159490/85FEE9759F6A9ABB8283A21CE2A8AC57004B4BCA/",
  },
  {
    name: "Gloryside",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33316776996552576/5BDE0853B2476A0895A461F3CA11B90CD7AF2CA5/",
  },
  {
    name: "Dark Rebellion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471989872563605684/46813E19616E0715D879EFB5049D3A1DE331488B/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://cdn.steamusercontent.com/ugc/1797522561529266178/C451F5F544B99C6AEBC05E004237F7A98253AA79/",
  },
  {
    name: "The Teikou",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2027229602993302551/2294C49BDB02B67511DBBCC8332CB070816013F4/",
  },
  {
    name: "Bright Crusaders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2274947340409011428/1DB70894416C865659F1417EC6330B6DE78470F9/",
  },
  {
    name: "4BK IIIAPiKC",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486629108749811427/2CF5EA55C8CD9ADADE085E22DCF088712F9B3625/",
  },
  {
    name: "no mango",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2216394743368317653/994BACA4749DCBD207AABD737E4E587E8A50DC50/",
  },
  {
    name: "Team Spirt",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2365041614377008704/82798DB347E1C06D9D18A13524410A929D30C6C5/",
  },
  {
    name: "Venezuela",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414585468072130085/98C8EC0AA6D8EAA642EC7DF556A75370340DB344/",
  },
  {
    name: "BB Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501268517263789581/51E13136D4CCC8C7D8062861541A1D13B8ED87E0/",
  },
  {
    name: "sibstrin.fruits",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495647722478189287/0778F149D6F3E3CBC4F1F6002976CCEEA1E7EAF7/",
  },
  {
    name: "Shinigami gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5838428307084889518/6204E1A0315057E9F227EDBCD42DB8F193B593AF/",
  },
  {
    name: "FryBoys",
    logo: "https://cdn.steamusercontent.com/ugc/2033991345204182594/79EEADCDF65A8741B290B31A2DBD36750D275444/",
  },
  {
    name: "Passion UA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2438207805864316467/672D6BE0D568AE5E7BC8494F05683207DCA9E28E/",
  },
  {
    name: "MOUZ",
    logo: "https://cdn.steamusercontent.com/ugc/2453977469313883353/584A9278F4834E081204E826BBF8A00FFAAD3F99/",
  },
  {
    name: "Business Club",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2031737253375716324/F2394A2E273AFE7FF7A0CCA0E8151D693EA2558C/",
  },
  {
    name: "Supremacia Granate",
    logo: "https://cdn.steamusercontent.com/ugc/1613933970481621317/DD2F7A7C1C475855990DBA50A1DC3CD8DEBAE82E/",
  },
  {
    name: "Bodypartz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2276070779257449845/E223F3662BEF54C8D40C889AD7DBD7E20FFBE45F/",
  },
  {
    name: "Eye Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492270746261050056/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Hot Headed Reborn",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1851559177441302358/5E9AC16C7E855BE0EC7DB7AF8C09B8C997BE0653/",
  },
  {
    name: "Lightwaves",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1859439050416610825/E31396BEF8CF2D9967DC3FEB9D741EBF1F920D03/",
  },
  {
    name: "is GG",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/934930395669179138/1741E8B09584625F9336D63264990348EC79E062/",
  },
  {
    name: "TOP G",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1904477344786719631/8912597C99B8D8554C3B87FEC1A3AD786B4EA10B/",
  },
  {
    name: "АГЕНТЫ 322",
    logo: "https://cdn.steamusercontent.com/ugc/13789507213244596323/4FB9A406F0E472FA6D661E63A81E51B625DEE687/",
  },
  {
    name: "ASAKURA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2370671116173459609/9854CD03A6A44348475DC298295552B5CEA70794/",
  },
  {
    name: "Churrax do Pitoco",
    logo: "https://cdn.steamusercontent.com/ugc/1851556002731056996/8CACF97137728C042C6D793D4B69B3E45889BDCF/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/17565673949316872571/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "LettuceWin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2395440094941131332/2B7E473E729F1C41BB996080F01A6E251DD07864/",
  },
  {
    name: "Kuma no Seishin",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1934884885422318631/332BD8D8B1854D849082141725379B81E11DBAE2/",
  },
  {
    name: "TEAM Cake",
    logo: "https://cdn.steamusercontent.com/ugc/54712126540798732/82F7FB33F698DE70387DE5C83791E40686804FF4/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2395438191613061704/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "123",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/24305856412469938/C5F6EE1D253007A66A9FEE100658275361AC964D/",
  },
  {
    name: "EYE Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/33307800759464515/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "txtmty",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2509152180183273140/AABBB1E9938A3C5AC58CC4A9B4BE612B38CBDC26/",
  },
  {
    name: "Invaders",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2297462073171121106/5EF06B2A21F8BDFA6E3A99CE45C896E47B05A926/",
  },
  {
    name: "Lasanha é muito bom",
    logo: "https://cdn.steamusercontent.com/ugc/844837131846499230/8A26018A082150632AD2C5909BC15B56C9B7B81D/",
  },
  {
    name: "5PIVAS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2259185282150940288/3B7C13F6FFB1B8096D820A4840B967A6F07AD127/",
  },
  {
    name: "Blind Owl Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2520411813227119183/5BFBEB3740CE71BA8BD711F57053FDBFED3DAA09/",
  },
  {
    name: "FRUNNIES team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1769324209274503813/B48AAC723B2ECD4AC66CA235B87F65481E3DE156/",
  },
  {
    name: "Slyapa ne Gribnaya",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2383035539754522626/26020B6EB5D4219D83DCB694B9075C9A21E56484/",
  },
  {
    name: "Mad Kings Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1821138407262581214/2473111D6CED1B3429F7565EEC44D7A5E16ED628/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505772116871293076/738CAE720BDD3790DD7C94C3FF1C16139C4025C5/",
  },
  {
    name: "HA3BAHUE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/912419373495116713/F8200614E7D1B53322FA5C0A72859B86E48FACFA/",
  },
  {
    name: "Ivory",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38937935066123963/441982EED700973C3520B932447038EC71DC8BB9/",
  },
  {
    name: "EYE GAMING",
    logo: "https://cdn.steamusercontent.com/ugc/8541973413326081/F4D0AD6C0EFC58DCF8DED009E4D51F25BE2DA05F/",
  },
  {
    name: "Blacklist International",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2541800915846514860/CF1883DC6BFE37EA765A0920324ACE06A410DF63/",
  },
  {
    name: "FUCK - 115ФЗ",
    logo: "https://cdn.steamusercontent.com/ugc/9378300774052310779/196B4556F8D6E7CF954F7150984A7F23AF2A5D72/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499016543989571745/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "GPSS.2537",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2023850162091247375/F9B725D066B85F000054F990D272F12C1A0969AC/",
  },
  {
    name: "Groomify",
    logo: "https://cdn.steamusercontent.com/ugc/40064469240084419/8CF768C88F04ED6AC59AC7C7DD76F89E335CB98B/",
  },
  {
    name: "САППОРТЫ НА ОКЛАДЕ",
    logo: "https://cdn.steamusercontent.com/ugc/15815658697245524710/0F517423A42D2A3F3FC9EC49B2C0EA222DF657DF/",
  },
  {
    name: "Hobot Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499016543988819788/BB31119DCF6BD35C5C287ED3C5ECA8695FA98986/",
  },
  {
    name: "Midas Club",
    logo: "https://cdn.steamusercontent.com/ugc/1023949891346003477/5818E876A49B28A109554B22D000935324B6FBFA/",
  },
  {
    name: "Eternal Academy",
    logo: "https://cdn.steamusercontent.com/ugc/59215140642356389/5264BE1B91A3E452EFFFD879271EC1860FA6765D/",
  },
  {
    name: "Royal Geass",
    logo: "https://cdn.steamusercontent.com/ugc/45699676877795904/FCB4245E61603E8153A22B05EAD5AFB8521A40D1/",
  },
  {
    name: "Team Essence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/49070399463365938/97A90EA41CAB3A74D7E01C92A2B9F7EC27E97C42/",
  },
  {
    name: "Tabakerka",
    logo: "https://cdn.steamusercontent.com/ugc/15260703854818998455/54B83F0597086F4348CF7A2AC2240A5B927E88A7/",
  },
  {
    name: "BORN Esports ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479883856024064964/59AA7254B83F5329A717965538798DD03106ED32/",
  },
  {
    name: "Team Türkiye",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455102731607875250/AD6D8253861851C2253F7B022EC2A8E1351BB101/",
  },
  {
    name: "LAVA ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2419066874909120532/28FD6BC45A2AB74169E5848AA31DA3127038BD6C/",
  },
  {
    name: "Argentina",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336573200/ECEAE61AE4421E4F08FCAB54B37BAA275822D507/",
  },
  {
    name: "Elite Eclipse ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2468619149601955033/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "Greece",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434851666336573037/56775F3075FCAD586514FC28BD540C2A294B920F/",
  },
  {
    name: "PARIVISION",
    logo: "https://cdn.steamusercontent.com/ugc/2476508692281774105/EDE870E88FFD1C4E01DE40BF1B5E548D3459D046/",
  },
  {
    name: "XIGUADADUI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/540761427839793191/28718C2CE4036879F9CA10908662837E1BBE28FB/",
  },
  {
    name: "TEAM.JeBait",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/771743811399207888/F6D4343F2261F635B3CF620EDA554258B8B02F58/",
  },
  {
    name: "la passion",
    logo: "https://cdn.steamusercontent.com/ugc/14182084863575674/E5324AAB12052C608A34EEC82A096D2B4AC615F8/",
  },
  {
    name: "KOKSAKI",
    logo: "https://cdn.steamusercontent.com/ugc/2265941315494927629/82604DD67184ED8A7CF1738E74CA329DD9FADDEC/",
  },
  {
    name: "Team Innovation e-Sports",
    logo: "https://cdn.steamusercontent.com/ugc/928184288026351125/F3B58C1E8B4892FCBCD48F332174E0F410B68632/",
  },
  {
    name: "TeamTuz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461856773383726886/76A4520DE9AB9730F191E2E9D92B7C55A21D3F01/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/8538725260156450/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "MBA",
    logo: "https://cdn.steamusercontent.com/ugc/54705607059708338/ADEC545363702A7193298C29FDB994BA913A0ED8/",
  },
  {
    name: "GAMONG GLADIATORS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2530541916787392435/886B6B8E0D58D0F9B2100A1B17EA2718AB052D1E/",
  },
  {
    name: "VooDooSh Team",
    logo: "https://cdn.steamusercontent.com/ugc/13230968139577235939/E91DC5A395C3B63A61A5733007B4407BB4BD89A8/",
  },
  {
    name: "Advance Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2501276587775204021/08E75E710C879E4081743BCF2C37D1ED42271A0D/",
  },
  {
    name: "Shalun",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5850813206320245991/84A508EF1C1269CD851D6C6BDCB476BDA78237B7/",
  },
  {
    name: "anderful Crips",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/946214981455865591/86EF5435EDC92814840FFF447F4B8D2C95DC7A3B/",
  },
  {
    name: "Old Warrior",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502391707449476316/AC709B2452590E8872310F7A1080FE1AA6191F21/",
  },
  {
    name: "Agressiv Style",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2469753292832357205/2C1EABE80F5A6589C5FB9988D0AD447167F1E707/",
  },
  {
    name: "Disband Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2458474900247638131/64815DD69FC7EA1C17D17575D4C496B79B55F76B/",
  },
  {
    name: "vmolo4ke",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1295297413939394443/EAFA25DE02CC00457AE26B8AD1D9B30BC07FA46F/",
  },
  {
    name: "The Honored Vanguard Recruits",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2318858611130217115/28577717107B14CDEA300BA7EBC3C803C938057B/",
  },
  {
    name: "Chimpanzes 1K",
    logo: "https://cdn.steamusercontent.com/ugc/852718778182138669/9CB423F71BCBBF55D1979C16766BB7146864B4BC/",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/4035672231089367/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "Team Mamutero",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499015290118907049/3FA26060DAB21F25146805DF34CA23B37AC3706C/",
  },
  {
    name: "Big brain",
    logo: "https://cdn.steamusercontent.com/ugc/2070010628969626788/D1F13F05C1BACE21088F63568ADBF6E5FD04CA50/",
  },
  {
    name: "The Immortal",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2061004698095768872/2D5680144BB32B54093BD69972135E6F61A1E92B/",
  },
  {
    name: "Team Forgess",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2300839139764415695/545A1D1A155B1703C04B46DEBDC901CC22341FEA/",
  },
  {
    name: "TEIKO",
    logo: "https://cdn.steamusercontent.com/ugc/34436871867767902/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "AnimeVesta",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/35561503592902149/57F2140AC0EDD16302C19B375C94C09089FDD6AA/",
  },
  {
    name: "acapefromArthur",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2395438191614172535/294CDAF6545A4BE8E6DF8F63D48EA34D3EBE0977/",
  },
  {
    name: "Lag Is No Excuse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2471994397480630029/5EF87080E0DE2BB86059D58EE9679B2572AED06A/",
  },
  {
    name: "Team Invictus",
    logo: "https://cdn.steamusercontent.com/ugc/10361158558279842134/B17295527C81D60B80290B9EB50B72ED66187657/",
  },
  {
    name: "trash_blood",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2433703573709146580/C552D14E165A0CE8010B792D5311C329EFD9A5C8/",
  },
  {
    name: "Frankfurt Beast Reborn",
    logo: "https://cdn.steamusercontent.com/ugc/2494521188356264687/A345EEE2BBA6E68CA9FBEF13D3C4735D8FA17300/",
  },
  {
    name: "Teiko",
    logo: "https://cdn.steamusercontent.com/ugc/6299284120712000/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Trigons Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2441591931353005684/E43B5D4D0C8077BE9C419F5AE15F0891EC102617/",
  },
  {
    name: "Hokori",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2270440475417693057/E6CD5B8C942B91762340873685BD895A84077330/",
  },
  {
    name: "Chimera Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/25429846520505742/8CC6F7D4209315AEB9CC55B5224FE95C6E757D91/",
  },
  {
    name: "No Bounty Hunter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/778496266075782111/49E5C0544136BBF2A56E416CAA07272E4CE373DB/",
  },
  {
    name: "Team Nemesis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5943133124691708501/E92E9BD71E16F162510C0451B600D3D0FD4B5633/",
  },
  {
    name: "youoy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/936059935295202747/93F22559EE52360CFBAE5D898D2E52559610DC6C/",
  },
  {
    name: "Rest Farmers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2408935857690503995/11EBDFEBA2D8E08D453F382B9E28637628833DB2/",
  },
  {
    name: "Kivioli RANGERS",
    logo: "https://cdn.steamusercontent.com/ugc/451791321631727700/4A652309A1ABD83961FDCA65ECFDA5ECF209FE86/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456239958003556938/996891188D796FFCE462134517E2FD018C06028C/",
  },
  {
    name: "egoisto",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2232158066553295792/8EC48FD77E45EB5EDD0C9C08CA32DF66F0E33B93/",
  },
  {
    name: "EYE Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/33307800759464515/20CB1AA41471ABE1B5C460D8CBDE915E595F8B23/",
  },
  {
    name: "Goldem Dream ",
    logo: "https://cdn.steamusercontent.com/ugc/2022729808624135671/C50D1A3631CD463BCE1D8F4031C12DB4CD7EB6B4/",
  },
  {
    name: "Neon Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1905612771137210708/67688ED3000B1B2140DCDD96275E114F3F9F3BC7/",
  },
  {
    name: "Team Bhutan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495642650333506614/3583BEBFB0DBFDF5DC46D0DBDF192EDB4821FEEB/",
  },
  {
    name: "RedCats Team",
    logo: "https://cdn.steamusercontent.com/ugc/25434746177837411/295F8F2CA7E3C718A2553D679A1D738BEE0C8261/",
  },
  {
    name: "322 maybe?",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5095292505122748379/271F634E9D5009FC36062EC0BE71CD8A86605E6C/",
  },
  {
    name: "White Dragons",
    logo: "https://cdn.steamusercontent.com/ugc/2489997394344308753/5C61829FF70841307A7B8539A2EDEBAA2E7076B0/",
  },
  {
    name: "Mister Maniacs",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2360517541588299016/FC1DC14A21F3B99692E7057A7246290AEBB7DE51/",
  },
  {
    name: "Рязань-ВДВ",
    logo: "https://cdn.steamusercontent.com/ugc/2517032845598517402/7122B75CE96825A74C07641A80FF9F2C15A1D029/",
  },
  {
    name: "Team Flamingos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1618471532867651602/1E80D4492EBF01893BEA19F8E96154163B9D45DE/",
  },
  {
    name: "Rayyan Lewis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452845400301357736/DD1A13447FBFD39BADBB93A02AEE357163BE2CA8/",
  },
  {
    name: "Edge",
    logo: "https://cdn.steamusercontent.com/ugc/17884533737171142983/4906E376E7E8A4CCE82DD5F8899CD80F1742C0EF/",
  },
  {
    name: "Shadow Reapers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2479873167159435718/56CD0109F030FD9C3414E93C567D974CEA3CCCBF/",
  },
  {
    name: "Waska",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492268755024477919/F2376446D05157B080B5D506473EE2F1D43097BF/",
  },
  {
    name: "Team Nepal",
    logo: "https://cdn.steamusercontent.com/ugc/2495642650333481984/E8A7C04040AD2E8099BF43A20D0D825B6DD9A579/",
  },
  {
    name: "Ofis Prezidenta",
    logo: "https://cdn.steamusercontent.com/ugc/10109597611085659559/A2225905AFDF6EF3B4147729CC29C828517871B1/",
  },
  {
    name: "MAG.Yolo",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2294083014503545247/3244C9C372A217D71C888E750F30ACE46244642C/",
  },
  {
    name: "TEAM RAKUZAN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2349259431563443348/972BA284459DDFD578497ED16C3ACABA2DD93738/",
  },
  {
    name: "KUKUYS",
    logo: "https://cdn.steamusercontent.com/ugc/17855972744792417589/0E04B6D0CD7F52E89E7DBAB4F548EB2B81174E27/",
  },
  {
    name: "LEVEL UP",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2042997274855416048/03EB935BD3725361C24F110A271C053E4C00C144/",
  },
  {
    name: "sky winners",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2184868908058050611/58D767573E350859C018FE53153515E8EA9F7F59/",
  },
  {
    name: "ReQ-Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2493375632831175951/2AAFCEDFA0E660562F6D0ABCB6BDE730A70AEA18/",
  },
  {
    name: "Swift Knights",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2446107492346973561/03C1A606587B371C139805153F66CD7367C6E837/",
  },
  {
    name: "Zero Tenacity",
    logo: "https://cdn.steamusercontent.com/ugc/23174701605135839/B5A052B86AE5F123031508603154EAD51013C412/",
  },
  {
    name: "MUXOMOR4IK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467499590566188928/18B490FDC4BE65E865E659587E101B320500AC9E/",
  },
  {
    name: "Go along",
    logo: "https://cdn.steamusercontent.com/ugc/2176988246610576867/62E1AF670B8FB5DEA3C35F246AB87ED995D0EFBF/",
  },
  {
    name: "KOKSAKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2265941315494927629/82604DD67184ED8A7CF1738E74CA329DD9FADDEC/",
  },
  {
    name: "JustBetter",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2495637028205197972/887A15C1AA2CB41B2EB82AD6AAC7CA830D1B9CFD/",
  },
  {
    name: "Big Bang Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2019352804996053730/B2F33387BA6420EF613A6A80085DA457BF81CA75/",
  },
  {
    name: "Big Bebra",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2483253396494208037/BB603570915AD6EA7550A4E4F1C68C3AA9E7FA05/",
  },
  {
    name: "Aurum",
    logo: "https://cdn.steamusercontent.com/ugc/59218081141814320/E8E1B8B47DCEF48B93FD2EFE10B10F0C0E86D6B8/",
  },
  {
    name: "КАКОЙ ВОПРОС",
    logo: "https://cdn.steamusercontent.com/ugc/2486633548122148844/D08C0B4F7F3C91A375349E84519F910A83AC63EC/",
  },
  {
    name: "Пещерные недомерки",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488887250880856421/556B4B45D2652313DA4DE923BADE563EA52A8782/",
  },
  {
    name: "ritashidog",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/35568576810624324/5B73D700C36F629C3A06C45BB38970C38D729829/",
  },
  {
    name: "Natus Vincere",
    logo: "https://cdn.steamusercontent.com/ugc/12154865032888504975/F7A3189FF156DB8ECAAFBDB13A3774AE75419483/",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2466356199630889718/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "Bury the Light",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2058756155236633327/DF0347562C7E7634F3478F29DBE377D3B06B1AEA/",
  },
  {
    name: "DARKITO + 4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2064378594217938002/38B3B67EEC0946CA02ACA2A4D736DE752953477C/",
  },
  {
    name: "AllStars",
    logo: "https://cdn.steamusercontent.com/ugc/4045900439146595/7F5CB85F6B65412CEF2F3723EF934EEBBD9A8111/",
  },
  {
    name: "TT Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/26555119762627201/2417E5C4EAF8D1C38F48C1316E8FFD614E450B73/",
  },
  {
    name: "Sport Boys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2066645069742095180/31DDA9244C20065133FFFA62879A606C395F8287/",
  },
  {
    name: "Team Silk",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2307596441979615498/4D75B4959F7F5E64AD9BCD8C284DF76DDC23EC25/",
  },
  {
    name: "Plasma VitaPlur",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2374028975373579428/F7DED922159D77D3B065C2619788DC2BC4A70B09/",
  },
  {
    name: "Пыльная Мышь LTD.",
    logo: "https://cdn.steamusercontent.com/ugc/15054768245109134797/C139E705D46A7084E6D4AF0A207DD5FDB015BD48/",
  },
  {
    name: "Carstensz Esports",
    logo: "https://cdn.steamusercontent.com/ugc/13811425010404918456/262EF6034349570E7B83E2E768BA9510917F9649/",
  },
  {
    name: "ZEUS THUNDER GOD",
    logo: "https://cdn.steamusercontent.com/ugc/1832426636071192128/298F144FCABFB502E6C9FE1DA66F61D9181A0C9F/",
  },
  {
    name: "Los Amayitos",
    logo: "https://cdn.steamusercontent.com/ugc/1823396490725214191/F30643A011387CC1CCFC7D5091F0BFB74E5BEF20/",
  },
  {
    name: "SC.Bears",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2449485192054435702/8BC477ACB73DC72EF77471D91F51667094699AD4/",
  },
  {
    name: "CONSILIUM",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2455117864640311170/BD55ECE73F0362F97B4BE5B97D9D68D18255C518/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2304221912329202047/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "Crew X",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2068882429938837131/68A44FC4EE83B8F88C4BEAF8E71F22E55A21409B/",
  },
  {
    name: "EYE",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2315477275994102552/E82E61687F55C289FF8B259C54EC72167DC7A870/",
  },
  {
    name: "Mexico",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1750231594263966983/8468D3B486A1F6E28E4913A7ABC7F41250EA8B75/",
  },
  {
    name: "Team Essence",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2388682884848822388/E127114B101206055D04F6935ABF8B08241969D5/",
  },
  {
    name: "Winter Bear",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2513641291257532360/DD2BF4B10E9D41131B18885208138CA7DB7BFB29/",
  },
  {
    name: "Rest Farmers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2408935857709091566/C508F342DE69BACD5CD416519A9DFAB8A4EFC7AD/",
  },
  {
    name: "усярды",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2348133056884843795/F9297C2D2578857640E5BDD66150801779BB60E0/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://cdn.steamusercontent.com/ugc/2456239958003556938/996891188D796FFCE462134517E2FD018C06028C/",
  },
  {
    name: "Team Xcuse",
    logo: "https://cdn.steamusercontent.com/ugc/29943083308111173/801F434C44B386CF6C4F40B811326D4B1B84A025/",
  },
  {
    name: "Yoru Ryodan",
    logo: "https://cdn.steamusercontent.com/ugc/2511393199352528296/692862E8E9C5CA96FCE1074C0FFE21ADA83597CE/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/61468307174677747/BD73254A1C9F0B80552DA9EE3C3DEB1C2D05605B/",
  },
  {
    name: "Business Club",
    logo: "https://cdn.steamusercontent.com/ugc/2455117864631601557/069C7E7A630A8FA333ED65FE72820D4091D24953/",
  },
  {
    name: "Eternityyy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2430327771137660100/5A10631AA44CAAEB65CB2055861613C3A6D121C2/",
  },
  {
    name: "Bociarnia",
    logo: "https://cdn.steamusercontent.com/ugc/2474254356505462957/74FA8AA899D224D90B17CE62B48747533823476D/",
  },
  {
    name: "Chimpanzini Bananini",
    logo: "https://cdn.steamusercontent.com/ugc/12870931815382498957/E3ECF113C81B26589D57118EDFFBADB842277446/",
  },
  {
    name: "Fatal draft team ",
    logo: "https://cdn.steamusercontent.com/ugc/15775730054867046042/A0F0E6D814C9414BF0E681CC686AD3BB4EA52FE4/",
  },
  {
    name: "TRABAJA SHIFU",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1913492787200376720/DC3000BAE936A66AC0CA474B4EDCBE349CE3B6AD/",
  },
  {
    name: "TheSleepers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/32188334469275734/CB96EB809DF59DDDCEBD89D2679AE207F6F3C389/",
  },
  {
    name: "JabberWook",
    logo: "https://cdn.steamusercontent.com/ugc/53580976228268025/24B4C151FE5414A167EA5C3E88F47B9AC2852FB8/",
  },
  {
    name: "Uzumaki",
    logo: "https://cdn.steamusercontent.com/ugc/15049561923706911748/46DF71E78D3B769867F51200FB60F6C692EFFF28/",
  },
  {
    name: "PVISION",
    logo: "https://cdn.steamusercontent.com/ugc/10219435865948801548/E28F12181BC6C85A32B808F26D5E8B14B91B952F/",
  },
  {
    name: "AllStars",
    logo: "https://cdn.steamusercontent.com/ugc/4045384532116681/898D126BA938B913D478519350A3F317E9DFFF03/",
  },
  {
    name: "SOSATELI",
    logo: "https://cdn.steamusercontent.com/ugc/5829421107745849841/3824A0E183E8C9CC73BC7EA0254F55E9A1DFF1CE/",
  },
  {
    name: "SUHARIKI",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496774890618315492/FC74DEBDF41B6AA67D264F48650596FD047E3838/",
  },
  {
    name: "Insanity Secrets",
    logo: "https://cdn.steamusercontent.com/ugc/14037622715438039267/04E112226360B4AEB861F53336EACCC60432E25F/",
  },
  {
    name: "Infinity",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2270441745021468359/0B29AFE6D9B224CB4EDB33A07AAC0D3FD19A00A6/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2549682215150686551/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "Legend Killer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2271565742181384286/3B3641EE86C5F920A1D1832595F689E195FE32D6/",
  },
  {
    name: "SAND KING GÓMEZ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2077888936797748911/EE4B48AA0D315BB844CC3CA8EAA77D5CD45B5AB6/",
  },
  {
    name: "zxc100-7",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029471260346957365/D2B3340799A8D96E6AB04F56A1CDB7D4B86538C4/",
  },
  {
    name: "Amigosos",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/772868668373636801/C51A553ADABD82BD53D91D8CBABDD0061B57FE52/",
  },
  {
    name: "Backpacks Gaming ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/875248821277318528/499B40D0A040293467C2E5F355C4670ED1FEC849/",
  },
  {
    name: "Team Invalid",
    logo: "https://cdn.steamusercontent.com/ugc/2522662979069332364/2CC5130EE2BAE6327C94821A3274BCFDDEA01072/",
  },
  {
    name: "#Ruiners: the new legacy",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2496760306123787094/04BE30552CCC1321DB969E1ACB35D91AD0CDB57A/",
  },
  {
    name: "Team Darleng",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442711405517313633/01FD0FD39B4AE9F4775E28C82210E7EF4AFC6898/",
  },
  {
    name: "RodjER Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2475376452004800871/8EF7217918E2903A2CD04AADE14BC8402AADCE86/",
  },
  {
    name: "Down Bad",
    logo: "https://cdn.steamusercontent.com/ugc/2006951997630165692/AC80B1794F7E217B3B6B054BD6DEA7769501DE25/",
  },
  {
    name: "Sibe Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2319983338495982729/D50CF32AA973D5471907A0BD1CBEBDD56F71AC34/",
  },
  {
    name: "СК УНИВЕР ПГНИУ",
    logo: "https://cdn.steamusercontent.com/ugc/2444981592441821794/2BD7ABE4BFA80C50661D401F4061DB5DFC3F81BD/",
  },
  {
    name: "sundervbabky",
    logo: "https://cdn.steamusercontent.com/ugc/9784851015757988342/2B002FCE2DED40C8AB2B33608EB5899F21FEF010/",
  },
  {
    name: "RCenjoers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2426965292311934167/524ABBFAB830707FC4E451D1AA804953C4895FB5/",
  },
  {
    name: "Jakiro Gaming ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2428074074157637774/5051FEB9BD1D2B70B122AB863B51B4ACA7AD88D1/",
  },
  {
    name: "pangolier s javelinom",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1852678988747798218/13734C5F707C49CF2880386C3B044D8754667C91/",
  },
  {
    name: "пасека",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2038475377471539322/83F1E1C4E1D66120F33DF08E9289D6942CED0342/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2399941883251678445/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "Pacific ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2414563907827946083/29883E4687A90EBE189F3F915A96B91FCDDFA7A4/",
  },
  {
    name: "Skyblades",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2424697006978293524/F5906F73364F065897D36A2CD1B5AFBB8DE40DCD/",
  },
  {
    name: "bob3r",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2461870725282231389/1EF3DB9E2B29E65F3D05481416C0A4E42BE09B5F/",
  },
  {
    name: "Evil Rabbit",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2535045516530973644/C227686C8309A739A57EF35CF376A8591927E1C2/",
  },
  {
    name: "Flawless Goblins",
    logo: "https://cdn.steamusercontent.com/ugc/1972044023037974203/AFD57B5B64B1E42F199DC861D81052FD991943EC/",
  },
  {
    name: "Yellow Submarine",
    logo: "https://cdn.steamusercontent.com/ugc/2506900380361558769/01D7A1FC1156B0550B4EF9EA2A3A2AF84D9BF884/",
  },
  {
    name: "Shadow Avengers",
    logo: "https://cdn.steamusercontent.com/ugc/2464108573202955954/C8A072AC6C8364B0FBAF92885C3A552836315CFC/",
  },
  {
    name: "Virtus.Pro",
    logo: "https://cdn.steamusercontent.com/ugc/841461304089282543/A5FF1D445B1D15A8C37B2026EFB4630D2ACE241A/",
  },
  {
    name: "Elite Eclipse",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2492270657680171854/8DE99E9FEB3212DA4970EACF23AD9BFBE939BD45/",
  },
  {
    name: "leman fanboys",
    logo: "https://cdn.steamusercontent.com/ugc/2028359449105910687/8DEBA69B8CCEE7A49BDAB75A26C5654B6280ABB5/",
  },
  {
    name: "Winter Bear",
    logo: "https://cdn.steamusercontent.com/ugc/2513641291257532360/DD2BF4B10E9D41131B18885208138CA7DB7BFB29/",
  },
  {
    name: "Chandogs",
    logo: "https://cdn.steamusercontent.com/ugc/2051985634560974622/BB703A683AB46C52CD975F7F5B812E152F2F7A0D/",
  },
  {
    name: "DARKNESS GAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1877463356745066761/970A15CB7D3F860BA71E931D9D5C10692F27EA01/",
  },
  {
    name: "Factory worker",
    logo: "https://cdn.steamusercontent.com/ugc/2474238502439370608/FFE91C506CBA67D473F23C58D86238B6CCBAE849/",
  },
  {
    name: "TEIKO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/34436871867767902/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Stellar Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2456229811263204138/778CDDF04A0CA78C0F165A69B5BDAC4CBE326B2D/",
  },
  {
    name: "CDUB Esports",
    logo: "https://cdn.steamusercontent.com/ugc/25438728964887489/F7512FF6D86F95D5F56391F4420180F4A04F4178/",
  },
  {
    name: "Kodix",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2528290116943504307/8732DAC88C404215B72FA2E4A32DBAC6CAFE6DAB/",
  },
  {
    name: "team Darya shpiss",
    logo: "https://cdn.steamusercontent.com/ugc/27688449403122032/7A463A1A3A56E9B5E035F973005A10DE2F0C04C5/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2321112186415898348/871A78A27BBA2ABBD82864F988C23D15C7351836/",
  },
  {
    name: "Silent killer",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5085158533690852941/5CFD49C25A35151C036A8B2A05CD44D06CB73853/",
  },
  {
    name: "Infamous Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2032858469296144304/EDF6030FFA1952797EE94712BB781280D5034932/",
  },
  {
    name: "adfinem",
    logo: "https://cdn.steamusercontent.com/ugc/2403322027834185684/0CA6F19A95C1B29D63DCF4A0C3BC04AD9FC96EC8/",
  },
  {
    name: "Mister Maniacs",
    logo: "https://cdn.steamusercontent.com/ugc/2508011791700199350/FC1DC14A21F3B99692E7057A7246290AEBB7DE51/",
  },
  {
    name: "Enucity team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2546304515570951301/A3C39FDD2A3E1FB42F2BA19B461B1CB883545C1D/",
  },
  {
    name: "ИЗИВИН",
    logo: "https://cdn.steamusercontent.com/ugc/11699635650424384735/14A7CA94E95E2EBBD452E27E358E6955AEAFBE90/",
  },
  {
    name: "Habibis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2467499590567114603/AEB73E78284BF41E1BF9CE07FE91B3228F58AD65/",
  },
  {
    name: "Tortu Ninjas",
    logo: "https://cdn.steamusercontent.com/ugc/16153731932797183978/7FE42AAB173931632059013BFDCCBA606C4111DE/",
  },
  {
    name: "EternalEngine",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5811406709787881231/19D2BBED12D36C1C55C2C58BD01EA8E38D3F4165/",
  },
  {
    name: "Dominion",
    logo: "https://cdn.steamusercontent.com/ugc/2456239958004431725/E228DDF5F2F0AB670945CC00351F32BB2644ABDA/",
  },
  {
    name: "BOOSTED ANIMALS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487767691336423370/2E363C9DCFF716BAE1CD9990623F68EB5C27E07E/",
  },
  {
    name: "Фармим на стартап",
    logo: "https://cdn.steamusercontent.com/ugc/14602927032912715812/733D45B53ADF1364276E347FC1C76D7A54523B4D/",
  },
  {
    name: "Polaris Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1831290045925630948/400C4E5FD779D964D9BEC5E44D414073ADC03790/",
  },
  {
    name: "Team_Shluhis",
    logo: "https://cdn.steamusercontent.com/ugc/10847682554635430944/CC3AA8A6A1FB23342654D501E9DE07D2CE4569FD/",
  },
  {
    name: "Normandy SR-2",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/32181900854350891/48E5CE923D11DE815817A3ADB91CB470027D6DAD/",
  },
  {
    name: "PERRO NEGRO",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/54708143746379362/DC20BA7EAD66F30C4F0ADF441B76BF4741025EED/",
  },
  {
    name: "Marvelous Warriors",
    logo: "https://cdn.steamusercontent.com/ugc/2289583009755688899/08ACDA39A18F8336DF6782B6D64A148F906D7278/",
  },
  {
    name: "Rakuzan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2503523949680034823/5F013D18FA3BF8B3AEAB8B9EE8785CAD9CAB80AB/",
  },
  {
    name: "5Stars Gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2288454296731446012/D8DD0B3473D47B07B58C294F7EF7331CDFAFECBA/",
  },
  {
    name: "Prodigy Of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2294084373444867064/D8CB3937C90008630491BBAFE364224C191A4573/",
  },
  {
    name: "郑家麦花鸡",
    logo: "https://cdn.steamusercontent.com/ugc/14993587966596140755/4F5600BDB65FDC962843667EC7FC9673C3E2AB2D/",
  },
  {
    name: "5YAT2VA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2499008300380126525/C61EEC5F6E8320C354F38C73870D63A8BEB7DA19/",
  },
  {
    name: "Team Sri Lanka ",
    logo: "https://cdn.steamusercontent.com/ugc/17502049819141089028/3663560050F12601A39B576661CF4FB4274BCAF3/",
  },
  {
    name: "Romashku",
    logo: "https://cdn.steamusercontent.com/ugc/23188735039211439/5DB5D321757EACAD96F9994A9BB69AFB343F9C94/",
  },
  {
    name: "Team Akatsuki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/85969284936642556/83F18AC6069DE412B9745E0454513B4E51894679/",
  },
  {
    name: "KIBA Arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/38943008359802971/782E74D6A8E46FC8D2B0F96490344A50BEF647B9/",
  },
  {
    name: "Yakult Brothers",
    logo: "https://cdn.steamusercontent.com/ugc/10720314978210335670/A3EDE6125A651D94E1DAAF0F3361ACEB9FB858C4/",
  },
  {
    name: "Demigods",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2502392427763946694/5D02E4493B1E9373C84054C315FA87BCB54A0C66/",
  },
  {
    name: "The Mango",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500144346996307194/A6762E92960DE9EC15737D484476AB5F34F50BE4/",
  },
  {
    name: "Made in Philippines",
    logo: "https://cdn.steamusercontent.com/ugc/34444682047510599/D5FBAA47F3BCBABA836886A083BC6FA33CDF5542/",
  },
  {
    name: "Best Warriors",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1825641707665233731/2F8712C030DC47C7069AA924D0ACEB964F54C76C/",
  },
  {
    name: "Gaimin Gladiators",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1850419664501191993/5DAAB68FB5604D29E1792A0F35E74B3FE3F3A026/",
  },
  {
    name: "YodiBrodi Nexus",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2217520643254868384/6E456F96913CB97E109B7676E931994A786BDDFD/",
  },
  {
    name: "kingkong ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2536171416453679943/956120F152836FFF38132E47E49E171961B10552/",
  },
  {
    name: "TURBOKIDS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2486619694624859216/39E1524A5DCC9C402CC0DA1B67E961F2AC553255/",
  },
  {
    name: "All Gamers Global",
    logo: "https://cdn.steamusercontent.com/ugc/11919673139914606/4B5AF4AF0B8136B73E597B844B98239EDD28EE98/",
  },
  {
    name: "Prodigy of God",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/34439408732573663/231E40DB1581137118431CF748CAB4E861D27D38/",
  },
  {
    name: "Uzumaki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/55829769499223738/03CAC669361925DB6C641BC3833E78EB78ACC25E/",
  },
  {
    name: "Noisy Monkeys",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2521536143069032273/6A2A4F76CC40339CE4B3FDA054FD6E1F6B0BAA5E/",
  },
  {
    name: "Team.Wild",
    logo: "https://cdn.steamusercontent.com/ugc/28812445888569607/894B65391E16294C55ECE9DA16B7D5FD96813327/",
  },
  {
    name: "BUDKA",
    logo: "https://cdn.steamusercontent.com/ugc/10108987452020031069/BA4F4AAD58CB63C2B3A8BEC417573129AC6525B7/",
  },
  {
    name: "PINGUIM BLINDADO",
    logo: "https://cdn.steamusercontent.com/ugc/61464272496486319/A9B1B7BD15000BC181039E4D82AC8B26516FB400/",
  },
  {
    name: "Klim Sani4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2264812881897028424/C00BE783DDA3B8AB9ADC99B303332A1B13663A53/",
  },
  {
    name: "Wing Ripper",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2200631506770437455/E5C9DBEA9D2EECC4F3F98DE49AC1D6D8EE533B88/",
  },
  {
    name: "Dominatrix",
    logo: "https://cdn.steamusercontent.com/ugc/2443836672845546041/27EA9658B4E3579D43DBA49A38530A3D26F2AB84/",
  },
  {
    name: "Qhali",
    logo: "https://cdn.steamusercontent.com/ugc/2411186841870152223/CB63D57ED3F48CD16221FD0D8B9FA9541E912F71/",
  },
  {
    name: "New Fis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2101548510593582556/8748C5B3BB16F5162598E7AD655834A702C5C8ED/",
  },
  {
    name: "ProfGameTeam",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1014943256936787540/267DFF933CF79BC7016A8E3E54E8FF0B3174D44F/",
  },
  {
    name: "Team Orrai",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2384181095843810157/FC48C0C1EDDF60EC211AB9D916FD659358691E05/",
  },
  {
    name: "TEIKO",
    logo: "https://cdn.steamusercontent.com/ugc/2494515481390429581/3FF228A7F7409318EEC092C18C14AF690A009B35/",
  },
  {
    name: "Wongs Bakery ",
    logo: "https://cdn.steamusercontent.com/ugc/2039622297663692503/C1370A1DADA1F44A6AB7C85709DA1E6D90DFF248/",
  },
  {
    name: "Kiba Arms ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2442720999812663297/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "Belarus",
    logo: "https://cdn.steamusercontent.com/ugc/2414585468072130709/D6B0CDD0C96CF73EBAB3DE13905DDA2ADB1FB017/",
  },
  {
    name: "No Magnus Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029485208088162535/65555E9B1CAAC829DEE838F671D0C9765917D44F/",
  },
  {
    name: "500 Bananas",
    logo: "https://cdn.steamusercontent.com/ugc/2313224038740336884/13195902EF0486DD305B56EFE79428E1E2E4B8C5/",
  },
  {
    name: "x9.InFlames",
    logo: "https://cdn.steamusercontent.com/ugc/9657911976791904445/8E3CA74988E133726F92595CF52C4540C420C85C/",
  },
  {
    name: "Quantum",
    logo: "https://cdn.steamusercontent.com/ugc/20928609852688055/0849AECACECC6072D174D581F1610EC5C842B297/",
  },
  {
    name: "South Team",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2434829473594191224/34F6A641392FE31627ADFC81A12F78853B00F1AF/",
  },
  {
    name: "Team Tea",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2547430415563820852/14C528D0CE511F1534CABBB97EBAECCF0CC22DD0/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2524912241845416591/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "Team Yakuza",
    logo: "https://cdn.steamusercontent.com/ugc/16316959938434043449/A6C4ED6057E5BADC96FE7BE720EC260084C534D0/",
  },
  {
    name: "Cloud9",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2399941883261718982/81DE19B3FD9737B5F16C725D3FB7E72251BE2A81/",
  },
  {
    name: "РуZкие",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029469358245012041/5E16BC9E8EBBF46225984C44C660AC5E31344FDA/",
  },
  {
    name: "Team Unluck",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2049749504559943168/EE112E42BAD1731E43FAA798E51CC9D8C5A29DFB/",
  },
  {
    name: "Orrai+4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2485503208863898605/4C481558A378A4F503284512CD64F3A620C716B9/",
  },
  {
    name: "REJ'S HAVEN",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2451720054148999605/CCD229A3A709C02B4F9D0CD6F591C3F87630DD56/",
  },
  {
    name: "EZKATKA",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1487830656542207062/86C263EBC729678F33CD308921B2274CE3028F41/",
  },
  {
    name: "megacreeps",
    logo: "https://cdn.steamusercontent.com/ugc/59213011604266896/0D43F9B1F136DE2C218958D0937061E9EF89DA7E/",
  },
  {
    name: "qwadro",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/969872369009334902/C6F8966FB92AF128FD95E1CD559EFC71C4C0A723/",
  },
  {
    name: "BLEED",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2295213538402514054/0B50AC73180D7322D099C37682AFF28BE4C4875E/",
  },
  {
    name: "Foxy gaming",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2289585333366985191/AC5A2097BEF04FD6D958B34C8A02A75C445ED58A/",
  },
  {
    name: "Heiteri saiki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2500150383076688327/071E82ED0D97D15A207A296DC1626A44735ABAE7/",
  },
  {
    name: "CHOTANOS ROMPE ANOS ",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5072773634750032572/15A9A2DDC3B4D4296DDAEB8D2DE79BACCDBA705D/",
  },
  {
    name: "Team Nemesis",
    logo: "https://cdn.steamusercontent.com/ugc/46830098156643164/3E4B9EA6711CFE3341284F7E432F457E070A5490/",
  },
  {
    name: "Kopite",
    logo: "https://cdn.steamusercontent.com/ugc/12664633626790679102/775BC53C08F504FD84D83C909D84E7F96EC04BED/",
  },
  {
    name: "Sworn Die",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1893228189115135367/7B3DB4DB3D54C15F2647A719B02F0584344C7B55/",
  },
  {
    name: "AU REJECTS",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/45692699737913632/BAADD0F1D198ABB748A9CE6B76B7FB3BB91F7961/",
  },
  {
    name: "COOMAN TEAM",
    logo: "https://cdn.steamusercontent.com/ugc/18116146926402593122/A57A0B24AAFCBB35C46659873456EE98C93A27B8/",
  },
  {
    name: "Team Secret",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2519275938081433056/9272E09CEB5578490ADBD97314EEB1748FE860C6/",
  },
  {
    name: "Dominion",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2487760715931751151/257CB3B69D75A5BE2033B35AB3DC1EAABFE0B207/",
  },
  {
    name: "5DOGS",
    logo: "https://cdn.steamusercontent.com/ugc/2001341700837357349/8E9A41B381ADE2B2C4A925CB19E862D0D5FF4D89/",
  },
  {
    name: "Bullish on Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/2029488469112229180/34D162D52880896F6247D7CDDEC864179D3A5271/",
  },
  {
    name: "Hustlers",
    logo: "https://cdn.steamusercontent.com/ugc/44576948000061359/15926442CAF0374AEC6BC0749DF4781D081E3C1A/",
  },
  {
    name: "Стак который ебет",
    logo: "https://cdn.steamusercontent.com/ugc/10699594615714697364/4852B932300344890E5AE2F6DB96C5595A7DC76A/",
  },
  {
    name: "Hustlers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2058751629901384188/15926442CAF0374AEC6BC0749DF4781D081E3C1A/",
  },
  {
    name: "Yoru Ryodan",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2511393199352528296/692862E8E9C5CA96FCE1074C0FFE21ADA83597CE/",
  },
  {
    name: "Пупсеки52 1151 #Savehoi4",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2453979737246408838/505EF6B6B978A7E13E31591EE4B6FA283AF80EC4/",
  },
  {
    name: "Parallel eSports",
    logo: "https://cdn.steamusercontent.com/ugc/1999066441861408614/71D1E68ECD1B5567B1E56F93F8511DB66D829C93/",
  },
  {
    name: "chepyxa",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2317732711197024853/648E09DE86BCA11602F045B32B1FB044C086E924/",
  },
  {
    name: "Neutron",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2477620729413646945/4A45B3162ADC2D9FC9B920D594685BD2102E495B/",
  },
  {
    name: "Dragon Blood",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2036224122590251530/1CF2060AE5A404AEF691C3180FF9CB522056149A/",
  },
  {
    name: "500 Bananas",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2313224038740336884/13195902EF0486DD305B56EFE79428E1E2E4B8C5/",
  },
  {
    name: "Prodigy of God",
    logo: "https://cdn.steamusercontent.com/ugc/2476506789837157870/5DA451CF76631085979DCD2E3E1BCE4EA7787A35/",
  },
  {
    name: "Demonios ",
    logo: "https://cdn.steamusercontent.com/ugc/1805404494409529112/0BC47B34123654E34B825FE743C60CCA6177746E/",
  },
  {
    name: "Play All-night Gaming",
    logo: "https://cdn.steamusercontent.com/ugc/696157805932818706/4D43B1E33868DCD22ECDEC41667B8798BB5C868E/",
  },
  {
    name: "Kiba arms",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5823791608697691859/C874F0EBA5B3083240361F889D627EC9FEA1E177/",
  },
  {
    name: "Samsara",
    logo: "https://cdn.steamusercontent.com/ugc/1851546730659087132/B6BE4DE1978DD4343FA75709F9CB25B0DB9A6392/",
  },
  {
    name: "Team Revenants",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2316606811314596998/0D697D79E35A9B5F9EE694120C4D2446A8C679FD/",
  },
  {
    name: "Passion UA",
    logo: "https://cdn.steamusercontent.com/ugc/18319865695983129908/E7302CFFC29E4716B28F5BAB4812020B2C61E389/",
  },
  {
    name: "Kiberpride",
    logo: "https://cdn.steamusercontent.com/ugc/11699921308757228808/B79B042B10A302EAB0728C1A52A0A4E129533D4D/",
  },
  {
    name: "Team EDL",
    logo: "https://cdn.steamusercontent.com/ugc/43453755106930223/7A1BED184D1662A4C6601CCE8DDA0627D1C7242E/",
  },
  {
    name: "GGNTU GROZTEK",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2288455678223692112/5A2C1E0F4285A6F04B0ACE8DEB6D5B2DD8640020/",
  },
  {
    name: "Bushido",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2452862258260235485/9EB13D52774575C58B082053A1EFBDDDF56EFAB6/",
  },
  {
    name: "Clever moves",
    logo: "https://cdn.steamusercontent.com/ugc/2111681609773803795/0A392FC5396E1924F8BD0B051B77A4DF1627703A/",
  },
  {
    name: "Team Tidebound",
    logo: "https://cdn.steamusercontent.com/ugc/11919673139914606/4B5AF4AF0B8136B73E597B844B98239EDD28EE98/",
  },
  {
    name: "team waska",
    logo: "https://cdn.steamusercontent.com/ugc/1983302387907692940/BAA861E234E1BA39D75DF4CB814A5B76D020BED7/",
  },
  {
    name: "YBN Team ",
    logo: "https://cdn.steamusercontent.com/ugc/13477024458919749307/D4E040EC7BBFD166C9461B80CF73A24E91AE09CF/",
  },
  {
    name: "Washed Dogs",
    logo: "https://cdn.steamusercontent.com/ugc/2484387455685490559/EE41AD19F07D4B81B831D6240C3924601848BE2E/",
  },
  {
    name: "DOTALOGOGAMING",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2465241449890765418/BDFFB096207155E8FD503096DA671F9A44BBF33F/",
  },
  {
    name: "Agressiv Style",
    logo: "https://cdn.steamusercontent.com/ugc/2469753292832357205/2C1EABE80F5A6589C5FB9988D0AD447167F1E707/",
  },
  {
    name: "Moonwalkers",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2029468089264423859/85E899F41FAB04B80B2041B13237C4CA56BE48CF/",
  },
  {
    name: "Team Vever'E",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2412327959194792625/6E0C475D7DB5E5F32297436E5D2B5279402CB3EC/",
  },
  {
    name: "Sporkface Killaz",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2006970470983489269/A7AE7D69A3BC308F0AEB6FA98557AE2E83AB7906/",
  },
  {
    name: "Hunghung and friend",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1688248603498736041/4564E003FD44F8D7EFF5930F5E29B4D3268FF3A7/",
  },
  {
    name: "Level UP esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2538424573666795850/206FD952692403A1BDA90BABF25B448CFBD5EEC9/",
  },
  {
    name: "Colombia",
    logo: "https://cdn.steamusercontent.com/ugc/1997939086698107085/4E84E898C54DE7952C9F2D8D7D0C83F0E53B33A3/",
  },
  {
    name: "Business club",
    logo: "https://cdn.steamusercontent.com/ugc/2315476471672988468/630288F96C4CB6BE1A045382D8638D0E93FC81BF/",
  },
  {
    name: "RUSSIAN FISHING",
    logo: "https://cdn.steamusercontent.com/ugc/2484382382226793931/6505531B79B70BB28041B347613324F3113CBEA3/",
  },
  {
    name: "WB mentality",
    logo: "https://cdn.steamusercontent.com/ugc/34444682045581098/59184E7E4CA97A589C0E39788BE35CA224A98059/",
  },
  {
    name: "Ni.VI",
    logo: "https://cdn.steamusercontent.com/ugc/9672147480542035/1E446F08DDC39AB13C7F1F79D302302A8667C7FD/",
  },
  {
    name: "Team Nebula",
    logo: "https://cdn.steamusercontent.com/ugc/16680900818856289715/C76AB73C2166A5156DE428CA31B7573CC4EF7DAF/",
  },
  {
    name: "The Immortal",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2363896044787382613/22481094AB9EA0ACC639C483812E052C15820186/",
  },
  {
    name: "Sumoku Cheesu",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/521625025311793326/BD332EC13654BE3EBA69C320E9F451071FF5941A/",
  },
  {
    name: "Wolf's Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/955209910517474575/2584E8ABD8BF2E24E0BC7272CCC759A7E57E2AF4/",
  },
  {
    name: "Abyssal Assassins",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2536171416453644411/CC5D217DAFEE746E13587BFADD702D9463004DC7/",
  },
  {
    name: "Acatsuki",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2532781589097934051/C24F4F764719959A21D7F58688E146F8F982E521/",
  },
  {
    name: "BulletProofs",
    logo: "https://cdn.steamusercontent.com/ugc/7422251078444838/ED672B04EBF5C1C8336FD3FE051520B630A367C3/",
  },
  {
    name: "Team Bangladesh",
    logo: "https://cdn.steamusercontent.com/ugc/2495642650333490243/C226E1E211612F92BF1CA475668DE10A12E7F633/",
  },
  {
    name: "Abyssal Guardians",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2505782089871983409/8884E555EFA954B7B9BC4697B7B322F80415739E/",
  },
  {
    name: "ВОЛК С ЛУЗСРИК",
    logo: "https://cdn.steamusercontent.com/ugc/2527165944750507252/4FFC0FEE5B3FF1F4B3A8CFBD8C18C24054402350/",
  },
  {
    name: "Beta eSports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2303092207384335932/69D4EA83CB49F359CB56D46F35EDFC4C8A1A47B0/",
  },
  {
    name: "Free -25 MMR",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/792000187955930633/F3F12555D57E16F65155BDB7EB59F26F8A0220EB/",
  },
  {
    name: "Mouth Esports",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/8538002816563892/44E6DCB0A59D9915BFB7CEB0149FBD08538E695F/",
  },
  {
    name: "Ethereal Edge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/7412737674093935/97E9E7B53E219EEAE184DE3FEE6F5430B939B72B/",
  },
  {
    name: "NIMBUS",
    logo: "https://cdn.steamusercontent.com/ugc/9959844916088009999/0113DD84CB032CDF77A7DF8EFEA404FB331A48BC/",
  },
  {
    name: "nouns",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/1861686187975269057/6E221E0B04CCB4AEF93A3FDA4DC7873A1BBAFAE2/",
  },
  {
    name: "BanyaPivoSamogon",
    logo: "https://cdn.steamusercontent.com/ugc/17200966068141230414/B28C0834D6955D14389EC7DD05C1569B023DBA0F/",
  },
  {
    name: "Rabbits of Revenge",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/5933000025540075144/456C2294E11687ACC192C73BEC98A1852CFDCCC2/",
  },
  {
    name: "Tundra Esports",
    logo: "https://cdn.steamusercontent.com/ugc/2031716132171967904/07B168B8063D9B22CDAD53AB421ECAF3D4B2E07E/",
  },
  {
    name: "BadLama",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/952973332488193504/AEF3915A2C631F33EF66261943B45A54CF327103/",
  },
  {
    name: "Hexi's Sexis",
    logo: "https://steamusercontent-a.akamaihd.net/ugc/2488891688818830662/CF30823C7F28F012AB912A0C25882C3ABB9D4D5C/",
  },
  {
    name: "HEROIC",
    logo: "https://cdn.steamusercontent.com/ugc/2471984170520125054/B066431AF4D322D300DD5180CEC8F6BA0E85A7F5/",
  },
];
