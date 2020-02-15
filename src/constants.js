'use strict';

const DEFAULT_COMMAND = `--help`;
const USER_ARGV_INDEX = 2;

const ExitCode = {
  SUCCESS: 0,
  ERROR: 1,
};

module.exports = {
  ExitCode,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
};
