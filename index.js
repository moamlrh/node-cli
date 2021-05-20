#!/usr/bin/env node

const { program } = require("@caporal/core");
const dedx = require("dedx");

const options = {
  limit:
    "Limit videos number, for ex: to get only the first 10 videos from the whole course || by default 0",
  ignoreVideo:
    "Skip/ignoring any video you want just pass the index ot this video, for ex: pass the video number 7 & will skip it ||  by default 0 ",
  fromVideo:
    "Download will start from this video you set it, for ex: if you pass 5 that's mean will skip the first 4 videos ||  by default 0",
  endVideo:
    "The download should stop in this video, For ex: if you pass 10 and the course has more then 10 videos will download just the first 10 videos and ignore other from videos 11-20 ||  by default 0",
  videoPath:
    "The path of video || by default '/videos' in the same folder you run the CLI",
};

program
  .argument("<course-id>", "Course id [You can get it from course URL]")
  .argument("<username>", "Your username in edx.org")
  .argument("<cookie>", "Your edx cookies [You can get it from network tab]")

  .option("-l, --limit <limit>", options.limit, {
    default: 0,
  })
  .option("-i, --ignore-video <ignore-video>", options.ignoreVideo, {
    default: 0,
  })
  .option("-s, --start-from <start-from>", options.fromVideo, {
    default: 0,
  })
  .option("-e, --end-video <end-video>", options.endVideo, {
    default: 0,
  })
  .option("-p, --path <path>", options.videoPath, {
    default: "/videos",
  })

  .action(({ args, options }) => {
    const { courseId, username, cookie } = args;
    const { limit, ignoreVideo, startFrom, endVideo, path } = options;

    dedx(courseId, username, cookie, {
      limit,
      ignoreVideo,
      startFrom,
      endVideo,
      path,
    });
  });

// to run CLI
program.run();
