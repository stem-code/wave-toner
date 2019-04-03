import * as $ from 'jquery';

export abstract class MusicBox {
  public static playMusic(newOctave) {
    const notes = { // hard-coded Star Wars Theme, change later
      1: {n: 'd', o: 4, t: 1},
      2: {n: 'd', o: 4, t: 2},
      3: {n: 'd', o: 4, t: 3},
      4: {n: 'g', o: 4, t: 4},
      10: {n: 'd', o: 5, t: 10},
      16: {n: 'c', o: 5, t: 16},
      17: {n: 'b', o: 4, t: 17},
      18: {n: 'a', o: 4, t: 18},
      19: {n: 'g', o: 5, t: 19},
      25: {n: 'd', o: 5, t: 25},
      28: {n: 'c', o: 5, t: 28},
      29: {n: 'b', o: 4, t: 29},
      30: {n: 'a', o: 4, t: 30},
      31: {n: 'g', o: 5, t: 31},
      36: {n: 'd', o: 5, t: 36},
      39: {n: 'c', o: 5, t: 39},
      40: {n: 'b', o: 4, t: 40},
      41: {n: 'c', o: 5, t: 41},
      42: {n: 'a', o: 4, t: 42},
      48: {n: 'z', o: 4, t: 48},
    };

    let incr = 0;
    let lastKey = 'Z';

    const bps = 8; // Beats per second

    const player = () => {
      incr++;
      if (notes[incr]) {
        let e = $.Event('keyup');
        e.which = lastKey.charCodeAt(0);
        $(document).trigger(e);

        setTimeout(() => {
          setTimeout(player, (1000 / bps) * 0.7);

          newOctave(notes[incr]['o']);

          e = $.Event('keydown');
          e.which = notes[incr]['n'].charCodeAt(0);
          $(document).trigger(e);
          lastKey = notes[incr]['n'];
        }, (1000 / bps) * 0.3);
      } else {
        setTimeout(player, 1000 / bps);
      }
    };

    player();
  }
}
