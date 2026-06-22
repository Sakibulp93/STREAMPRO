import play from 'play-dl';

async function test() {
  try {
    const info = await play.video_info('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    console.log(info.video_details.channel);
  } catch (e) {
    console.error(e);
  }
}
test();
