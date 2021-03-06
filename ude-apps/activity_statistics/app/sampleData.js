const { Map: IMap, List: IList, Set: ISet } = Immutable;

golab.tools.activityStatistics.sampleData = IMap({
  apps: ISet([
    'Concept Cloud',
    'Wiki',
    'Concept Mapper',
    'Hypothesis Scratchpad',
  ]),
  phases: ISet([
    'Orientation',
    'Conceptualisation',
    'Investigation',
    'Conclusion',
    'ConceptCloud',
    'Discussion',
  ]),
  lanes: IList([
    IMap({
      "phaseActivities": Immutable.fromJS([
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:36:04.601Z"),
          "end": new Date("2015-08-25T12:51:34.900Z"),
          "originalIndex": 0
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:51:34.900Z"),
          "end": new Date("2015-08-25T12:51:59.932Z"),
          "originalIndex": 1
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:51:59.932Z"),
          "end": new Date("2015-08-25T12:57:37.388Z"),
          "originalIndex": 2
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:57:37.388Z"),
          "end": new Date("2015-08-25T13:01:25.968Z"),
          "originalIndex": 3
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:01:25.968Z"),
          "end": new Date("2015-08-25T13:01:28.905Z"),
          "originalIndex": 4
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:01:28.905Z"),
          "end": new Date("2015-08-25T13:01:58.166Z"),
          "originalIndex": 5
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:01:58.166Z"),
          "end": new Date("2015-08-25T13:10:25.174Z"),
          "originalIndex": 6
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:10:25.174Z"),
          "end": new Date("2015-08-25T13:11:03.188Z"),
          "originalIndex": 7
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:03.188Z"),
          "end": new Date("2015-08-25T13:11:08.786Z"),
          "originalIndex": 8
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:11:08.786Z"),
          "end": new Date("2015-08-25T13:11:14.193Z"),
          "originalIndex": 9
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:14.193Z"),
          "end": new Date("2015-08-25T13:11:46.897Z"),
          "originalIndex": 10
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:11:46.897Z"),
          "end": new Date("2015-08-25T13:12:03.012Z"),
          "originalIndex": 11
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:12:03.012Z"),
          "end": new Date("2015-08-25T13:19:23.526Z"),
          "originalIndex": 12
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:23.526Z"),
          "end": new Date("2015-08-25T13:19:23.710Z"),
          "originalIndex": 13
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:19:23.710Z"),
          "end": new Date("2015-08-25T13:20:00.285Z"),
          "originalIndex": 14
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:20:00.285Z"),
          "end": new Date("2015-08-25T13:20:03.439Z"),
          "originalIndex": 15
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:20:03.439Z"),
          "end": new Date("2015-08-25T13:21:16.638Z"),
          "originalIndex": 16
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:21:16.638Z"),
          "end": new Date("2015-08-25T13:21:28.713Z"),
          "originalIndex": 17
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:21:28.713Z"),
          "end": new Date("2015-08-25T13:21:32.045Z"),
          "originalIndex": 18
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:21:32.045Z"),
          "end": new Date("2015-08-25T13:21:36.705Z"),
          "originalIndex": 19
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:21:36.705Z"),
          "end": new Date("2015-08-25T13:23:29.731Z"),
          "originalIndex": 20
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:23:29.731Z"),
          "end": new Date("2015-08-25T13:25:49.408Z"),
          "originalIndex": 21
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:49.408Z"),
          "end": new Date("2015-08-25T13:25:49.608Z"),
          "originalIndex": 22
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:25:49.608Z"),
          "end": new Date("2015-08-25T13:25:51.328Z"),
          "originalIndex": 23
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:51.328Z"),
          "end": new Date("2015-08-25T13:29:35.000Z"),
          "originalIndex": 24
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:29:35.000Z"),
          "end": new Date("2015-08-25T13:31:19.132Z"),
          "originalIndex": 25
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:31:19.132Z"),
          "end": new Date("2015-08-25T13:31:20.785Z"),
          "originalIndex": 26
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:31:20.785Z"),
          "end": new Date("2015-08-25T13:31:21.061Z"),
          "originalIndex": 27
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:31:21.061Z"),
          "end": new Date("2015-08-25T13:31:41.097Z"),
          "originalIndex": 28
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:31:41.097Z"),
          "end": new Date("2015-08-25T13:32:05.352Z"),
          "originalIndex": 29
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:32:05.352Z"),
          "end": new Date("2015-08-25T13:32:49.665Z"),
          "originalIndex": 30
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:32:49.665Z"),
          "end": new Date("2015-08-25T13:33:29.634Z"),
          "originalIndex": 31
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:33:29.634Z"),
          "end": new Date("2015-08-25T13:34:39.955Z"),
          "originalIndex": 32
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:39.955Z"),
          "end": new Date("2015-08-25T13:34:40.384Z"),
          "originalIndex": 33
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:40.384Z"),
          "end": new Date("2015-08-25T13:35:22.219Z"),
          "originalIndex": 34,
          "focussed": false
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:35:22.219Z"),
          "end": new Date("2015-08-25T13:35:24.175Z"),
          "originalIndex": 35
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:24.175Z"),
          "end": new Date("2015-08-25T13:35:25.364Z"),
          "originalIndex": 36
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:35:25.364Z"),
          "end": new Date("2015-08-25T13:35:32.467Z"),
          "originalIndex": 37
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:32.467Z"),
          "end": new Date("2015-08-25T13:40:54.220Z"),
          "originalIndex": 38
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:40:54.220Z"),
          "end": new Date("2015-08-25T13:40:56.085Z"),
          "originalIndex": 39
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:40:56.085Z"),
          "end": new Date("2015-08-25T13:41:39.829Z"),
          "originalIndex": 40
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:41:39.829Z"),
          "end": new Date("2015-08-25T13:41:50.728Z"),
          "originalIndex": 41
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:41:50.728Z"),
          "end": new Date("2015-08-25T13:43:04.765Z"),
          "originalIndex": 42
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:43:04.765Z"),
          "end": new Date("2015-08-25T13:43:08.561Z"),
          "originalIndex": 43
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:43:08.561Z"),
          "end": new Date("2015-08-25T13:43:30.545Z"),
          "originalIndex": 44
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:43:30.545Z"),
          "end": new Date("2015-08-25T13:44:30.770Z"),
          "originalIndex": 45
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:30.770Z"),
          "end": new Date("2015-08-25T13:44:30.777Z"),
          "originalIndex": 46
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:44:30.777Z"),
          "end": new Date("2015-08-25T13:44:30.812Z"),
          "originalIndex": 47
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:44:30.812Z"),
          "end": new Date("2015-08-25T13:44:31.952Z"),
          "originalIndex": 48
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:31.952Z"),
          "end": new Date("2015-08-25T13:44:41.327Z"),
          "originalIndex": 49
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:44:41.327Z"),
          "end": new Date("2015-08-25T13:44:41.721Z"),
          "originalIndex": 50
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:44:41.721Z"),
          "end": new Date("2015-08-25T13:44:57.641Z"),
          "originalIndex": 51
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:17:01.332Z"),
          "end": new Date("2015-08-25T14:17:21.512Z"),
          "originalIndex": 52
        },



        // copy of a data set back a month
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T12:36:04.601Z"),
          "end": new Date("2015-07-25T12:51:34.900Z"),
          "originalIndex": 0
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T12:51:34.900Z"),
          "end": new Date("2015-07-25T12:51:59.932Z"),
          "originalIndex": 1
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T12:51:59.932Z"),
          "end": new Date("2015-07-25T12:57:37.388Z"),
          "originalIndex": 2
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T12:57:37.388Z"),
          "end": new Date("2015-07-25T13:01:25.968Z"),
          "originalIndex": 3
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:01:25.968Z"),
          "end": new Date("2015-07-25T13:01:28.905Z"),
          "originalIndex": 4
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:01:28.905Z"),
          "end": new Date("2015-07-25T13:01:58.166Z"),
          "originalIndex": 5
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:01:58.166Z"),
          "end": new Date("2015-07-25T13:10:25.174Z"),
          "originalIndex": 6
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:10:25.174Z"),
          "end": new Date("2015-07-25T13:11:03.188Z"),
          "originalIndex": 7
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:11:03.188Z"),
          "end": new Date("2015-07-25T13:11:08.786Z"),
          "originalIndex": 8
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:11:08.786Z"),
          "end": new Date("2015-07-25T13:11:14.193Z"),
          "originalIndex": 9
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:11:14.193Z"),
          "end": new Date("2015-07-25T13:11:46.897Z"),
          "originalIndex": 10
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:11:46.897Z"),
          "end": new Date("2015-07-25T13:12:03.012Z"),
          "originalIndex": 11
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:12:03.012Z"),
          "end": new Date("2015-07-25T13:19:23.526Z"),
          "originalIndex": 12
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:19:23.526Z"),
          "end": new Date("2015-07-25T13:19:23.710Z"),
          "originalIndex": 13
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:19:23.710Z"),
          "end": new Date("2015-07-25T13:20:00.285Z"),
          "originalIndex": 14
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:20:00.285Z"),
          "end": new Date("2015-07-25T13:20:03.439Z"),
          "originalIndex": 15
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:20:03.439Z"),
          "end": new Date("2015-07-25T13:21:16.638Z"),
          "originalIndex": 16
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:21:16.638Z"),
          "end": new Date("2015-07-25T13:21:28.713Z"),
          "originalIndex": 17
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:21:28.713Z"),
          "end": new Date("2015-07-25T13:21:32.045Z"),
          "originalIndex": 18
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:21:32.045Z"),
          "end": new Date("2015-07-25T13:21:36.705Z"),
          "originalIndex": 19
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:21:36.705Z"),
          "end": new Date("2015-07-25T13:23:29.731Z"),
          "originalIndex": 20
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:23:29.731Z"),
          "end": new Date("2015-07-25T13:25:49.408Z"),
          "originalIndex": 21
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:25:49.408Z"),
          "end": new Date("2015-07-25T13:25:49.608Z"),
          "originalIndex": 22
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:25:49.608Z"),
          "end": new Date("2015-07-25T13:25:51.328Z"),
          "originalIndex": 23
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:25:51.328Z"),
          "end": new Date("2015-07-25T13:29:35.000Z"),
          "originalIndex": 24
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:29:35.000Z"),
          "end": new Date("2015-07-25T13:31:19.132Z"),
          "originalIndex": 25
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:31:19.132Z"),
          "end": new Date("2015-07-25T13:31:20.785Z"),
          "originalIndex": 26
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:31:20.785Z"),
          "end": new Date("2015-07-25T13:31:21.061Z"),
          "originalIndex": 27
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:31:21.061Z"),
          "end": new Date("2015-07-25T13:31:41.097Z"),
          "originalIndex": 28
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:31:41.097Z"),
          "end": new Date("2015-07-25T13:32:05.352Z"),
          "originalIndex": 29
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:32:05.352Z"),
          "end": new Date("2015-07-25T13:32:49.665Z"),
          "originalIndex": 30
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:32:49.665Z"),
          "end": new Date("2015-07-25T13:33:29.634Z"),
          "originalIndex": 31
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:33:29.634Z"),
          "end": new Date("2015-07-25T13:34:39.955Z"),
          "originalIndex": 32
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:34:39.955Z"),
          "end": new Date("2015-07-25T13:34:40.384Z"),
          "originalIndex": 33
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:34:40.384Z"),
          "end": new Date("2015-07-25T13:35:22.219Z"),
          "originalIndex": 34,
          "focussed": false
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:35:22.219Z"),
          "end": new Date("2015-07-25T13:35:24.175Z"),
          "originalIndex": 35
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:35:24.175Z"),
          "end": new Date("2015-07-25T13:35:25.364Z"),
          "originalIndex": 36
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:35:25.364Z"),
          "end": new Date("2015-07-25T13:35:32.467Z"),
          "originalIndex": 37
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:35:32.467Z"),
          "end": new Date("2015-07-25T13:40:54.220Z"),
          "originalIndex": 38
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:40:54.220Z"),
          "end": new Date("2015-07-25T13:40:56.085Z"),
          "originalIndex": 39
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:40:56.085Z"),
          "end": new Date("2015-07-25T13:41:39.829Z"),
          "originalIndex": 40
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:41:39.829Z"),
          "end": new Date("2015-07-25T13:41:50.728Z"),
          "originalIndex": 41
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:41:50.728Z"),
          "end": new Date("2015-07-25T13:43:04.765Z"),
          "originalIndex": 42
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:43:04.765Z"),
          "end": new Date("2015-07-25T13:43:08.561Z"),
          "originalIndex": 43
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:43:08.561Z"),
          "end": new Date("2015-07-25T13:43:30.545Z"),
          "originalIndex": 44
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:43:30.545Z"),
          "end": new Date("2015-07-25T13:44:30.770Z"),
          "originalIndex": 45
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:44:30.770Z"),
          "end": new Date("2015-07-25T13:44:30.777Z"),
          "originalIndex": 46
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:44:30.777Z"),
          "end": new Date("2015-07-25T13:44:30.812Z"),
          "originalIndex": 47
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:44:30.812Z"),
          "end": new Date("2015-07-25T13:44:31.952Z"),
          "originalIndex": 48
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:44:31.952Z"),
          "end": new Date("2015-07-25T13:44:41.327Z"),
          "originalIndex": 49
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:44:41.327Z"),
          "end": new Date("2015-07-25T13:44:41.721Z"),
          "originalIndex": 50
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:44:41.721Z"),
          "end": new Date("2015-07-25T13:44:57.641Z"),
          "originalIndex": 51
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:17:01.332Z"),
          "end": new Date("2015-08-25T14:17:21.512Z"),
          "originalIndex": 52
        },
      ]),
      "rawPhaseActivities": [
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:36:04.601Z"),
          "end": new Date("2015-08-25T12:51:34.900Z"),
          "originalIndex": 0
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:51:34.900Z"),
          "end": new Date("2015-08-25T12:51:59.932Z"),
          "originalIndex": 1
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:51:59.932Z"),
          "end": new Date("2015-08-25T12:57:37.388Z"),
          "originalIndex": 2
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:57:37.388Z"),
          "end": new Date("2015-08-25T13:01:25.968Z"),
          "originalIndex": 3
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:01:25.968Z"),
          "end": new Date("2015-08-25T13:01:28.905Z"),
          "originalIndex": 4
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:01:28.905Z"),
          "end": new Date("2015-08-25T13:01:58.166Z"),
          "originalIndex": 5
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:01:58.166Z"),
          "end": new Date("2015-08-25T13:10:25.174Z"),
          "originalIndex": 6
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:10:25.174Z"),
          "end": new Date("2015-08-25T13:11:03.188Z"),
          "originalIndex": 7
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:03.188Z"),
          "end": new Date("2015-08-25T13:11:08.786Z"),
          "originalIndex": 8
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:11:08.786Z"),
          "end": new Date("2015-08-25T13:11:14.193Z"),
          "originalIndex": 9
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:14.193Z"),
          "end": new Date("2015-08-25T13:11:46.897Z"),
          "originalIndex": 10
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:11:46.897Z"),
          "end": new Date("2015-08-25T13:12:03.012Z"),
          "originalIndex": 11
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:12:03.012Z"),
          "end": new Date("2015-08-25T13:19:23.526Z"),
          "originalIndex": 12
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:23.526Z"),
          "end": new Date("2015-08-25T13:19:23.710Z"),
          "originalIndex": 13
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:19:23.710Z"),
          "end": new Date("2015-08-25T13:20:00.285Z"),
          "originalIndex": 14
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:20:00.285Z"),
          "end": new Date("2015-08-25T13:20:03.439Z"),
          "originalIndex": 15
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:20:03.439Z"),
          "end": new Date("2015-08-25T13:21:16.638Z"),
          "originalIndex": 16
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:21:16.638Z"),
          "end": new Date("2015-08-25T13:21:28.713Z"),
          "originalIndex": 17
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:21:28.713Z"),
          "end": new Date("2015-08-25T13:21:32.045Z"),
          "originalIndex": 18
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:21:32.045Z"),
          "end": new Date("2015-08-25T13:21:36.705Z"),
          "originalIndex": 19
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:21:36.705Z"),
          "end": new Date("2015-08-25T13:23:29.731Z"),
          "originalIndex": 20
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:23:29.731Z"),
          "end": new Date("2015-08-25T13:25:49.408Z"),
          "originalIndex": 21
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:49.408Z"),
          "end": new Date("2015-08-25T13:25:49.608Z"),
          "originalIndex": 22
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:25:49.608Z"),
          "end": new Date("2015-08-25T13:25:51.328Z"),
          "originalIndex": 23
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:51.328Z"),
          "end": new Date("2015-08-25T13:29:35.000Z"),
          "originalIndex": 24
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:29:35.000Z"),
          "end": new Date("2015-08-25T13:31:19.132Z"),
          "originalIndex": 25
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:31:19.132Z"),
          "end": new Date("2015-08-25T13:31:20.785Z"),
          "originalIndex": 26
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:31:20.785Z"),
          "end": new Date("2015-08-25T13:31:21.061Z"),
          "originalIndex": 27
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:31:21.061Z"),
          "end": new Date("2015-08-25T13:31:41.097Z"),
          "originalIndex": 28
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:31:41.097Z"),
          "end": new Date("2015-08-25T13:32:05.352Z"),
          "originalIndex": 29
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:32:05.352Z"),
          "end": new Date("2015-08-25T13:32:49.665Z"),
          "originalIndex": 30
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:32:49.665Z"),
          "end": new Date("2015-08-25T13:33:29.634Z"),
          "originalIndex": 31
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:33:29.634Z"),
          "end": new Date("2015-08-25T13:34:39.955Z"),
          "originalIndex": 32
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:39.955Z"),
          "end": new Date("2015-08-25T13:34:40.384Z"),
          "originalIndex": 33
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:40.384Z"),
          "end": new Date("2015-08-25T13:35:22.219Z"),
          "originalIndex": 34,
          "focussed": false
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:35:22.219Z"),
          "end": new Date("2015-08-25T13:35:24.175Z"),
          "originalIndex": 35
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:24.175Z"),
          "end": new Date("2015-08-25T13:35:25.364Z"),
          "originalIndex": 36
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:35:25.364Z"),
          "end": new Date("2015-08-25T13:35:32.467Z"),
          "originalIndex": 37
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:32.467Z"),
          "end": new Date("2015-08-25T13:40:54.220Z"),
          "originalIndex": 38
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:40:54.220Z"),
          "end": new Date("2015-08-25T13:40:56.085Z"),
          "originalIndex": 39
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:40:56.085Z"),
          "end": new Date("2015-08-25T13:41:39.829Z"),
          "originalIndex": 40
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:41:39.829Z"),
          "end": new Date("2015-08-25T13:41:50.728Z"),
          "originalIndex": 41
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:41:50.728Z"),
          "end": new Date("2015-08-25T13:43:04.765Z"),
          "originalIndex": 42
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:43:04.765Z"),
          "end": new Date("2015-08-25T13:43:08.561Z"),
          "originalIndex": 43
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:43:08.561Z"),
          "end": new Date("2015-08-25T13:43:30.545Z"),
          "originalIndex": 44
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:43:30.545Z"),
          "end": new Date("2015-08-25T13:44:30.770Z"),
          "originalIndex": 45
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:30.770Z"),
          "end": new Date("2015-08-25T13:44:30.777Z"),
          "originalIndex": 46
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:44:30.777Z"),
          "end": new Date("2015-08-25T13:44:30.812Z"),
          "originalIndex": 47
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:44:30.812Z"),
          "end": new Date("2015-08-25T13:44:31.952Z"),
          "originalIndex": 48
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:31.952Z"),
          "end": new Date("2015-08-25T13:44:41.327Z"),
          "originalIndex": 49
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:44:41.327Z"),
          "end": new Date("2015-08-25T13:44:41.721Z"),
          "originalIndex": 50
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:44:41.721Z"),
          "end": new Date("2015-08-25T13:44:57.641Z"),
          "originalIndex": 51
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:17:01.332Z"),
          "end": new Date("2015-08-25T14:17:21.512Z"),
          "originalIndex": 52
        },


        // copy of a data set back a month
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T12:36:04.601Z"),
          "end": new Date("2015-07-25T12:51:34.900Z"),
          "originalIndex": 0
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T12:51:34.900Z"),
          "end": new Date("2015-07-25T12:51:59.932Z"),
          "originalIndex": 1
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T12:51:59.932Z"),
          "end": new Date("2015-07-25T12:57:37.388Z"),
          "originalIndex": 2
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T12:57:37.388Z"),
          "end": new Date("2015-07-25T13:01:25.968Z"),
          "originalIndex": 3
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:01:25.968Z"),
          "end": new Date("2015-07-25T13:01:28.905Z"),
          "originalIndex": 4
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:01:28.905Z"),
          "end": new Date("2015-07-25T13:01:58.166Z"),
          "originalIndex": 5
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:01:58.166Z"),
          "end": new Date("2015-07-25T13:10:25.174Z"),
          "originalIndex": 6
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:10:25.174Z"),
          "end": new Date("2015-07-25T13:11:03.188Z"),
          "originalIndex": 7
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:11:03.188Z"),
          "end": new Date("2015-07-25T13:11:08.786Z"),
          "originalIndex": 8
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:11:08.786Z"),
          "end": new Date("2015-07-25T13:11:14.193Z"),
          "originalIndex": 9
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:11:14.193Z"),
          "end": new Date("2015-07-25T13:11:46.897Z"),
          "originalIndex": 10
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:11:46.897Z"),
          "end": new Date("2015-07-25T13:12:03.012Z"),
          "originalIndex": 11
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:12:03.012Z"),
          "end": new Date("2015-07-25T13:19:23.526Z"),
          "originalIndex": 12
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:19:23.526Z"),
          "end": new Date("2015-07-25T13:19:23.710Z"),
          "originalIndex": 13
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:19:23.710Z"),
          "end": new Date("2015-07-25T13:20:00.285Z"),
          "originalIndex": 14
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:20:00.285Z"),
          "end": new Date("2015-07-25T13:20:03.439Z"),
          "originalIndex": 15
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:20:03.439Z"),
          "end": new Date("2015-07-25T13:21:16.638Z"),
          "originalIndex": 16
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:21:16.638Z"),
          "end": new Date("2015-07-25T13:21:28.713Z"),
          "originalIndex": 17
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:21:28.713Z"),
          "end": new Date("2015-07-25T13:21:32.045Z"),
          "originalIndex": 18
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:21:32.045Z"),
          "end": new Date("2015-07-25T13:21:36.705Z"),
          "originalIndex": 19
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:21:36.705Z"),
          "end": new Date("2015-07-25T13:23:29.731Z"),
          "originalIndex": 20
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:23:29.731Z"),
          "end": new Date("2015-07-25T13:25:49.408Z"),
          "originalIndex": 21
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:25:49.408Z"),
          "end": new Date("2015-07-25T13:25:49.608Z"),
          "originalIndex": 22
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:25:49.608Z"),
          "end": new Date("2015-07-25T13:25:51.328Z"),
          "originalIndex": 23
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:25:51.328Z"),
          "end": new Date("2015-07-25T13:29:35.000Z"),
          "originalIndex": 24
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:29:35.000Z"),
          "end": new Date("2015-07-25T13:31:19.132Z"),
          "originalIndex": 25
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:31:19.132Z"),
          "end": new Date("2015-07-25T13:31:20.785Z"),
          "originalIndex": 26
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:31:20.785Z"),
          "end": new Date("2015-07-25T13:31:21.061Z"),
          "originalIndex": 27
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:31:21.061Z"),
          "end": new Date("2015-07-25T13:31:41.097Z"),
          "originalIndex": 28
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:31:41.097Z"),
          "end": new Date("2015-07-25T13:32:05.352Z"),
          "originalIndex": 29
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:32:05.352Z"),
          "end": new Date("2015-07-25T13:32:49.665Z"),
          "originalIndex": 30
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:32:49.665Z"),
          "end": new Date("2015-07-25T13:33:29.634Z"),
          "originalIndex": 31
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:33:29.634Z"),
          "end": new Date("2015-07-25T13:34:39.955Z"),
          "originalIndex": 32
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:34:39.955Z"),
          "end": new Date("2015-07-25T13:34:40.384Z"),
          "originalIndex": 33
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:34:40.384Z"),
          "end": new Date("2015-07-25T13:35:22.219Z"),
          "originalIndex": 34,
          "focussed": false
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:35:22.219Z"),
          "end": new Date("2015-07-25T13:35:24.175Z"),
          "originalIndex": 35
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:35:24.175Z"),
          "end": new Date("2015-07-25T13:35:25.364Z"),
          "originalIndex": 36
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:35:25.364Z"),
          "end": new Date("2015-07-25T13:35:32.467Z"),
          "originalIndex": 37
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:35:32.467Z"),
          "end": new Date("2015-07-25T13:40:54.220Z"),
          "originalIndex": 38
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:40:54.220Z"),
          "end": new Date("2015-07-25T13:40:56.085Z"),
          "originalIndex": 39
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:40:56.085Z"),
          "end": new Date("2015-07-25T13:41:39.829Z"),
          "originalIndex": 40
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:41:39.829Z"),
          "end": new Date("2015-07-25T13:41:50.728Z"),
          "originalIndex": 41
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:41:50.728Z"),
          "end": new Date("2015-07-25T13:43:04.765Z"),
          "originalIndex": 42
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:43:04.765Z"),
          "end": new Date("2015-07-25T13:43:08.561Z"),
          "originalIndex": 43
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:43:08.561Z"),
          "end": new Date("2015-07-25T13:43:30.545Z"),
          "originalIndex": 44
        },
        {
          "username": "student1",
          "phase": "ConceptCloud",
          "start": new Date("2015-07-25T13:43:30.545Z"),
          "end": new Date("2015-07-25T13:44:30.770Z"),
          "originalIndex": 45
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:44:30.770Z"),
          "end": new Date("2015-07-25T13:44:30.777Z"),
          "originalIndex": 46
        },
        {
          "username": "student1",
          "phase": "Orientation",
          "start": new Date("2015-07-25T13:44:30.777Z"),
          "end": new Date("2015-07-25T13:44:30.812Z"),
          "originalIndex": 47
        },
        {
          "username": "student1",
          "phase": "Investigation",
          "start": new Date("2015-07-25T13:44:30.812Z"),
          "end": new Date("2015-07-25T13:44:31.952Z"),
          "originalIndex": 48
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-07-25T13:44:31.952Z"),
          "end": new Date("2015-07-25T13:44:41.327Z"),
          "originalIndex": 49
        },
        {
          "username": "student1",
          "phase": "Conclusion",
          "start": new Date("2015-07-25T13:44:41.327Z"),
          "end": new Date("2015-07-25T13:44:41.721Z"),
          "originalIndex": 50
        },
        {
          "username": "student1",
          "phase": "Discussion",
          "start": new Date("2015-07-25T13:44:41.721Z"),
          "end": new Date("2015-07-25T13:44:57.641Z"),
          "originalIndex": 51
        },
        {
          "username": "student1",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:17:01.332Z"),
          "end": new Date("2015-08-25T14:17:21.512Z"),
          "originalIndex": 52
        },
      ],
      "appActivities": Immutable.fromJS([
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:04.601Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:36:04.683Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:51:16.042Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:51:34.900Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:51:36.551Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:01.791Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:57:37.427Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:01:08.310Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:11:38.772Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:11:49.731Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:19:55.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:29.731Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:49.408Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:49.608Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:31:19.132Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:20.785Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:31:23.506Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:41.127Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:32:05.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:33:23.148Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:33:29.634Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:33:30.429Z")
        },


        // copy of a data set back a month
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:36:04.601Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:36:04.683Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:51:16.042Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:51:34.900Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T12:51:36.551Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:52:01.791Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:57:37.427Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T13:01:08.310Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:11:38.772Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:11:49.731Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-07-25T13:19:55.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:23:29.731Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:25:49.408Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:25:49.608Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:31:19.132Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:31:20.785Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:31:23.506Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:31:41.127Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-07-25T13:32:05.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:33:23.148Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:33:29.634Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T13:33:30.429Z")
        }
      ]),
      "rawAppActivities": [
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:04.601Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:36:04.683Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:51:16.042Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:51:34.900Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:51:36.551Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:01.791Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:57:37.427Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:01:08.310Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:11:38.772Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:11:49.731Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:19:55.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:29.731Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:49.408Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:49.608Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:31:19.132Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:20.785Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:31:23.506Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:41.127Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:32:05.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:33:23.148Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:33:29.634Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:33:30.429Z")
        },



        // copy of a data set back a month
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:36:04.601Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:36:04.683Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:51:16.042Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:51:34.900Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T12:51:36.551Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T12:52:01.791Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T12:57:37.427Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T13:01:08.310Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:11:38.772Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:11:49.731Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-07-25T13:19:55.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:23:29.731Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:25:49.408Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:25:49.608Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:31:19.132Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:31:20.785Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:31:23.506Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:31:41.127Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-07-25T13:32:05.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-07-25T13:33:23.148Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-07-25T13:33:29.634Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-07-25T13:33:30.429Z")
        }
      ],
      "username": "student1",
      "minimized": false,
    }),
    IMap({
      "phaseActivities": Immutable.fromJS([
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:46:17.863Z"),
          "end": new Date("2015-08-25T13:01:04.094Z"),
          "originalIndex": 53
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:01:04.094Z"),
          "end": new Date("2015-08-25T13:02:55.073Z"),
          "originalIndex": 54
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:02:55.073Z"),
          "end": new Date("2015-08-25T13:04:01.446Z"),
          "originalIndex": 55
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:04:01.446Z"),
          "end": new Date("2015-08-25T13:11:07.075Z"),
          "originalIndex": 56
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:07.075Z"),
          "end": new Date("2015-08-25T13:11:32.065Z"),
          "originalIndex": 57
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:11:32.065Z"),
          "end": new Date("2015-08-25T13:14:04.227Z"),
          "originalIndex": 58
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:04.227Z"),
          "end": new Date("2015-08-25T13:14:14.439Z"),
          "originalIndex": 59
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:14:14.439Z"),
          "end": new Date("2015-08-25T13:14:43.098Z"),
          "originalIndex": 60
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:14:43.098Z"),
          "end": new Date("2015-08-25T13:14:53.385Z"),
          "originalIndex": 61
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:14:53.385Z"),
          "end": new Date("2015-08-25T13:14:57.854Z"),
          "originalIndex": 62
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:14:57.854Z"),
          "end": new Date("2015-08-25T13:20:44.251Z"),
          "originalIndex": 63
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:20:44.251Z"),
          "end": new Date("2015-08-25T13:21:06.344Z"),
          "originalIndex": 64
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:21:06.344Z"),
          "end": new Date("2015-08-25T13:23:29.968Z"),
          "originalIndex": 65
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:29.968Z"),
          "end": new Date("2015-08-25T13:23:32.532Z"),
          "originalIndex": 66
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:32.532Z"),
          "end": new Date("2015-08-25T13:23:33.707Z"),
          "originalIndex": 67
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:33.707Z"),
          "end": new Date("2015-08-25T13:23:34.288Z"),
          "originalIndex": 68
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:34.288Z"),
          "end": new Date("2015-08-25T13:23:35.445Z"),
          "originalIndex": 69
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:35.445Z"),
          "end": new Date("2015-08-25T13:23:36.271Z"),
          "originalIndex": 70
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:36.271Z"),
          "end": new Date("2015-08-25T13:23:36.809Z"),
          "originalIndex": 71
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:36.809Z"),
          "end": new Date("2015-08-25T13:23:37.694Z"),
          "originalIndex": 72
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:37.694Z"),
          "end": new Date("2015-08-25T13:23:37.895Z"),
          "originalIndex": 73
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:37.895Z"),
          "end": new Date("2015-08-25T13:23:45.461Z"),
          "originalIndex": 74
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:45.461Z"),
          "end": new Date("2015-08-25T13:24:04.811Z"),
          "originalIndex": 75
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:24:04.811Z"),
          "end": new Date("2015-08-25T13:24:18.341Z"),
          "originalIndex": 76
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:24:18.341Z"),
          "end": new Date("2015-08-25T13:24:28.693Z"),
          "originalIndex": 77
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:24:28.693Z"),
          "end": new Date("2015-08-25T13:24:32.907Z"),
          "originalIndex": 78
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:24:32.907Z"),
          "end": new Date("2015-08-25T13:25:06.864Z"),
          "originalIndex": 79
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:06.864Z"),
          "end": new Date("2015-08-25T13:25:06.917Z"),
          "originalIndex": 80
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:25:06.917Z"),
          "end": new Date("2015-08-25T13:25:07.422Z"),
          "originalIndex": 81
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:07.422Z"),
          "end": new Date("2015-08-25T13:25:07.432Z"),
          "originalIndex": 82
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:25:07.432Z"),
          "end": new Date("2015-08-25T13:25:07.693Z"),
          "originalIndex": 83
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:07.693Z"),
          "end": new Date("2015-08-25T13:25:07.789Z"),
          "originalIndex": 84
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:25:07.789Z"),
          "end": new Date("2015-08-25T13:25:09.551Z"),
          "originalIndex": 85
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:09.551Z"),
          "end": new Date("2015-08-25T13:25:11.581Z"),
          "originalIndex": 86
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:11.581Z"),
          "end": new Date("2015-08-25T13:25:13.231Z"),
          "originalIndex": 87
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:13.231Z"),
          "end": new Date("2015-08-25T13:25:14.718Z"),
          "originalIndex": 88
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:25:14.718Z"),
          "end": new Date("2015-08-25T13:25:15.123Z"),
          "originalIndex": 89
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:15.123Z"),
          "end": new Date("2015-08-25T13:29:48.391Z"),
          "originalIndex": 90
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:29:48.391Z"),
          "end": new Date("2015-08-25T13:32:15.642Z"),
          "originalIndex": 91
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:32:15.642Z"),
          "end": new Date("2015-08-25T13:34:31.706Z"),
          "originalIndex": 92
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:31.706Z"),
          "end": new Date("2015-08-25T13:34:33.591Z"),
          "originalIndex": 93
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:33.591Z"),
          "end": new Date("2015-08-25T13:34:39.591Z"),
          "originalIndex": 94
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:39.591Z"),
          "end": new Date("2015-08-25T13:34:40.731Z"),
          "originalIndex": 95
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:34:40.731Z"),
          "end": new Date("2015-08-25T13:34:41.637Z"),
          "originalIndex": 96
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:34:41.637Z"),
          "end": new Date("2015-08-25T13:34:42.268Z"),
          "originalIndex": 97
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:34:42.268Z"),
          "end": new Date("2015-08-25T13:34:45.164Z"),
          "originalIndex": 98
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:34:45.164Z"),
          "end": new Date("2015-08-25T13:34:48.453Z"),
          "originalIndex": 99
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:48.453Z"),
          "end": new Date("2015-08-25T13:34:53.410Z"),
          "originalIndex": 100
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:53.410Z"),
          "end": new Date("2015-08-25T13:35:11.065Z"),
          "originalIndex": 101
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:35:11.065Z"),
          "end": new Date("2015-08-25T13:35:13.319Z"),
          "originalIndex": 102
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:13.319Z"),
          "end": new Date("2015-08-25T13:41:21.545Z"),
          "originalIndex": 103
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:41:21.545Z"),
          "end": new Date("2015-08-25T13:41:49.591Z"),
          "originalIndex": 104
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:41:49.591Z"),
          "end": new Date("2015-08-25T13:42:05.009Z"),
          "originalIndex": 105
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:42:05.009Z"),
          "end": new Date("2015-08-25T14:03:56.201Z"),
          "originalIndex": 106
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:03:56.201Z"),
          "end": new Date("2015-08-25T14:17:46.825Z"),
          "originalIndex": 107
        }
      ]),
      "rawPhaseActivities": [
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:46:17.863Z"),
          "end": new Date("2015-08-25T13:01:04.094Z"),
          "originalIndex": 53
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:01:04.094Z"),
          "end": new Date("2015-08-25T13:02:55.073Z"),
          "originalIndex": 54
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:02:55.073Z"),
          "end": new Date("2015-08-25T13:04:01.446Z"),
          "originalIndex": 55
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:04:01.446Z"),
          "end": new Date("2015-08-25T13:11:07.075Z"),
          "originalIndex": 56
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:11:07.075Z"),
          "end": new Date("2015-08-25T13:11:32.065Z"),
          "originalIndex": 57
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:11:32.065Z"),
          "end": new Date("2015-08-25T13:14:04.227Z"),
          "originalIndex": 58
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:04.227Z"),
          "end": new Date("2015-08-25T13:14:14.439Z"),
          "originalIndex": 59
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:14:14.439Z"),
          "end": new Date("2015-08-25T13:14:43.098Z"),
          "originalIndex": 60
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:14:43.098Z"),
          "end": new Date("2015-08-25T13:14:53.385Z"),
          "originalIndex": 61
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:14:53.385Z"),
          "end": new Date("2015-08-25T13:14:57.854Z"),
          "originalIndex": 62
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:14:57.854Z"),
          "end": new Date("2015-08-25T13:20:44.251Z"),
          "originalIndex": 63
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:20:44.251Z"),
          "end": new Date("2015-08-25T13:21:06.344Z"),
          "originalIndex": 64
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:21:06.344Z"),
          "end": new Date("2015-08-25T13:23:29.968Z"),
          "originalIndex": 65
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:29.968Z"),
          "end": new Date("2015-08-25T13:23:32.532Z"),
          "originalIndex": 66
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:32.532Z"),
          "end": new Date("2015-08-25T13:23:33.707Z"),
          "originalIndex": 67
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:33.707Z"),
          "end": new Date("2015-08-25T13:23:34.288Z"),
          "originalIndex": 68
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:34.288Z"),
          "end": new Date("2015-08-25T13:23:35.445Z"),
          "originalIndex": 69
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:35.445Z"),
          "end": new Date("2015-08-25T13:23:36.271Z"),
          "originalIndex": 70
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:36.271Z"),
          "end": new Date("2015-08-25T13:23:36.809Z"),
          "originalIndex": 71
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:36.809Z"),
          "end": new Date("2015-08-25T13:23:37.694Z"),
          "originalIndex": 72
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:37.694Z"),
          "end": new Date("2015-08-25T13:23:37.895Z"),
          "originalIndex": 73
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:23:37.895Z"),
          "end": new Date("2015-08-25T13:23:45.461Z"),
          "originalIndex": 74
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:45.461Z"),
          "end": new Date("2015-08-25T13:24:04.811Z"),
          "originalIndex": 75
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:24:04.811Z"),
          "end": new Date("2015-08-25T13:24:18.341Z"),
          "originalIndex": 76
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:24:18.341Z"),
          "end": new Date("2015-08-25T13:24:28.693Z"),
          "originalIndex": 77
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:24:28.693Z"),
          "end": new Date("2015-08-25T13:24:32.907Z"),
          "originalIndex": 78
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:24:32.907Z"),
          "end": new Date("2015-08-25T13:25:06.864Z"),
          "originalIndex": 79
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:06.864Z"),
          "end": new Date("2015-08-25T13:25:06.917Z"),
          "originalIndex": 80
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:25:06.917Z"),
          "end": new Date("2015-08-25T13:25:07.422Z"),
          "originalIndex": 81
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:07.422Z"),
          "end": new Date("2015-08-25T13:25:07.432Z"),
          "originalIndex": 82
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:25:07.432Z"),
          "end": new Date("2015-08-25T13:25:07.693Z"),
          "originalIndex": 83
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:07.693Z"),
          "end": new Date("2015-08-25T13:25:07.789Z"),
          "originalIndex": 84
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:25:07.789Z"),
          "end": new Date("2015-08-25T13:25:09.551Z"),
          "originalIndex": 85
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:09.551Z"),
          "end": new Date("2015-08-25T13:25:11.581Z"),
          "originalIndex": 86
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:11.581Z"),
          "end": new Date("2015-08-25T13:25:13.231Z"),
          "originalIndex": 87
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:25:13.231Z"),
          "end": new Date("2015-08-25T13:25:14.718Z"),
          "originalIndex": 88
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:25:14.718Z"),
          "end": new Date("2015-08-25T13:25:15.123Z"),
          "originalIndex": 89
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:25:15.123Z"),
          "end": new Date("2015-08-25T13:29:48.391Z"),
          "originalIndex": 90
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:29:48.391Z"),
          "end": new Date("2015-08-25T13:32:15.642Z"),
          "originalIndex": 91
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:32:15.642Z"),
          "end": new Date("2015-08-25T13:34:31.706Z"),
          "originalIndex": 92
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:31.706Z"),
          "end": new Date("2015-08-25T13:34:33.591Z"),
          "originalIndex": 93
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:33.591Z"),
          "end": new Date("2015-08-25T13:34:39.591Z"),
          "originalIndex": 94
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:39.591Z"),
          "end": new Date("2015-08-25T13:34:40.731Z"),
          "originalIndex": 95
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:34:40.731Z"),
          "end": new Date("2015-08-25T13:34:41.637Z"),
          "originalIndex": 96
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:34:41.637Z"),
          "end": new Date("2015-08-25T13:34:42.268Z"),
          "originalIndex": 97
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:34:42.268Z"),
          "end": new Date("2015-08-25T13:34:45.164Z"),
          "originalIndex": 98
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:34:45.164Z"),
          "end": new Date("2015-08-25T13:34:48.453Z"),
          "originalIndex": 99
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:34:48.453Z"),
          "end": new Date("2015-08-25T13:34:53.410Z"),
          "originalIndex": 100
        },
        {
          "username": "student3",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:53.410Z"),
          "end": new Date("2015-08-25T13:35:11.065Z"),
          "originalIndex": 101
        },
        {
          "username": "student3",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:35:11.065Z"),
          "end": new Date("2015-08-25T13:35:13.319Z"),
          "originalIndex": 102
        },
        {
          "username": "student3",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:35:13.319Z"),
          "end": new Date("2015-08-25T13:41:21.545Z"),
          "originalIndex": 103
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:41:21.545Z"),
          "end": new Date("2015-08-25T13:41:49.591Z"),
          "originalIndex": 104
        },
        {
          "username": "student3",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:41:49.591Z"),
          "end": new Date("2015-08-25T13:42:05.009Z"),
          "originalIndex": 105
        },
        {
          "username": "student3",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:42:05.009Z"),
          "end": new Date("2015-08-25T14:03:56.201Z"),
          "originalIndex": 106
        },
        {
          "username": "student3",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:03:56.201Z"),
          "end": new Date("2015-08-25T14:17:46.825Z"),
          "originalIndex": 107
        }
      ],
      "appActivities": Immutable.fromJS([
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:49:16.769Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:49:19.071Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:02:55.123Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:03:37.565Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:04:01.446Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:04:03.298Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:11:32.100Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:13:56.203Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:04.227Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:14:30.380Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:14:47.361Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:53.385Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:20:08.984Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:33.707Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:33.800Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:36.439Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:36.857Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:55.022Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:24:05.403Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:06.864Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:25:06.917Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:07.422Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:25:07.551Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:07.789Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:13.231Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:14.718Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:26:25.879Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:55.284Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:32:26.195Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:03:56.425Z")
        }
      ]),
      "rawAppActivities": [
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:49:16.769Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:49:19.071Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:02:55.123Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:03:37.565Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:04:01.446Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:04:03.298Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:11:32.100Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:13:56.203Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:04.227Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:14:30.380Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:14:47.361Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:53.385Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:20:08.984Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:33.707Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:33.800Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:36.439Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:36.857Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:23:55.022Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:24:05.403Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:06.864Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:25:06.917Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:07.422Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:25:07.551Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:07.789Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:25:13.231Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:25:14.718Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:26:25.879Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:31:55.284Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:32:26.195Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:03:56.425Z")
        }
      ],
      "username": "student3",
      "minimized": false,
    }),
    IMap({
      "phaseActivities": Immutable.fromJS([
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:37:02.294Z"),
          "end": new Date("2015-08-25T12:55:45.681Z"),
          "originalIndex": 108,
          "focussed": false
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:55:45.681Z"),
          "end": new Date("2015-08-25T12:56:36.408Z"),
          "originalIndex": 109
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:56:36.408Z"),
          "end": new Date("2015-08-25T13:03:29.562Z"),
          "originalIndex": 110
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:03:29.562Z"),
          "end": new Date("2015-08-25T13:04:09.971Z"),
          "originalIndex": 111
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:04:09.971Z"),
          "end": new Date("2015-08-25T13:05:19.167Z"),
          "originalIndex": 112
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:05:19.167Z"),
          "end": new Date("2015-08-25T13:06:02.471Z"),
          "originalIndex": 113
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:06:02.471Z"),
          "end": new Date("2015-08-25T13:06:17.602Z"),
          "originalIndex": 114
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:06:17.602Z"),
          "end": new Date("2015-08-25T13:06:26.774Z"),
          "originalIndex": 115
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:06:26.774Z"),
          "end": new Date("2015-08-25T13:06:58.646Z"),
          "originalIndex": 116
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:06:58.646Z"),
          "end": new Date("2015-08-25T13:13:44.180Z"),
          "originalIndex": 117
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:13:44.180Z"),
          "end": new Date("2015-08-25T13:13:48.171Z"),
          "originalIndex": 118
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:13:48.171Z"),
          "end": new Date("2015-08-25T13:14:00.246Z"),
          "originalIndex": 119
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:14:00.246Z"),
          "end": new Date("2015-08-25T13:14:03.855Z"),
          "originalIndex": 120
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:03.855Z"),
          "end": new Date("2015-08-25T13:15:38.416Z"),
          "originalIndex": 121
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:15:38.416Z"),
          "end": new Date("2015-08-25T13:15:51.701Z"),
          "originalIndex": 122
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:15:51.701Z"),
          "end": new Date("2015-08-25T13:16:01.071Z"),
          "originalIndex": 123
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:16:01.071Z"),
          "end": new Date("2015-08-25T13:19:12.933Z"),
          "originalIndex": 124
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:12.933Z"),
          "end": new Date("2015-08-25T13:19:14.048Z"),
          "originalIndex": 125
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:14.048Z"),
          "end": new Date("2015-08-25T13:19:14.299Z"),
          "originalIndex": 126
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:14.299Z"),
          "end": new Date("2015-08-25T13:19:14.326Z"),
          "originalIndex": 127
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:14.326Z"),
          "end": new Date("2015-08-25T13:19:15.290Z"),
          "originalIndex": 128
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:15.290Z"),
          "end": new Date("2015-08-25T13:19:19.474Z"),
          "originalIndex": 129
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:19.474Z"),
          "end": new Date("2015-08-25T13:23:00.088Z"),
          "originalIndex": 130
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:23:00.088Z"),
          "end": new Date("2015-08-25T13:23:00.723Z"),
          "originalIndex": 131
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:00.723Z"),
          "end": new Date("2015-08-25T13:23:20.669Z"),
          "originalIndex": 132
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:20.669Z"),
          "end": new Date("2015-08-25T13:23:23.132Z"),
          "originalIndex": 133
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:23:23.132Z"),
          "end": new Date("2015-08-25T13:23:34.237Z"),
          "originalIndex": 134
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:23:34.237Z"),
          "end": new Date("2015-08-25T13:23:38.128Z"),
          "originalIndex": 135
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:38.128Z"),
          "end": new Date("2015-08-25T13:27:39.386Z"),
          "originalIndex": 136
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:27:39.386Z"),
          "end": new Date("2015-08-25T13:28:34.616Z"),
          "originalIndex": 137
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:28:34.616Z"),
          "end": new Date("2015-08-25T13:28:35.375Z"),
          "originalIndex": 138
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:28:35.375Z"),
          "end": new Date("2015-08-25T13:28:45.284Z"),
          "originalIndex": 139
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:28:45.284Z"),
          "end": new Date("2015-08-25T13:28:48.297Z"),
          "originalIndex": 140
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:28:48.297Z"),
          "end": new Date("2015-08-25T13:28:48.771Z"),
          "originalIndex": 141
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:28:48.771Z"),
          "end": new Date("2015-08-25T13:32:57.196Z"),
          "originalIndex": 142
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:32:57.196Z"),
          "end": new Date("2015-08-25T13:34:54.232Z"),
          "originalIndex": 143
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:54.232Z"),
          "end": new Date("2015-08-25T13:34:55.155Z"),
          "originalIndex": 144
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:55.155Z"),
          "end": new Date("2015-08-25T13:40:58.129Z"),
          "originalIndex": 145
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:40:58.129Z"),
          "end": new Date("2015-08-25T13:41:08.747Z"),
          "originalIndex": 146
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:41:08.747Z"),
          "end": new Date("2015-08-25T13:46:43.991Z"),
          "originalIndex": 147
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:46:43.991Z"),
          "end": new Date("2015-08-25T13:46:44.721Z"),
          "originalIndex": 148
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:46:44.721Z"),
          "end": new Date("2015-08-25T13:46:54.307Z"),
          "originalIndex": 149
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:46:54.307Z"),
          "end": new Date("2015-08-25T13:56:52.602Z"),
          "originalIndex": 150
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:56:52.602Z"),
          "end": new Date("2015-08-25T13:57:53.063Z"),
          "originalIndex": 151
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:57:53.063Z"),
          "end": new Date("2015-08-25T13:58:30.463Z"),
          "originalIndex": 152
        },
        {
          "username": "student2",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:58:30.463Z"),
          "end": new Date("2015-08-25T13:59:31.553Z"),
          "originalIndex": 153
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:59:31.553Z"),
          "end": new Date("2015-08-25T14:00:01.315Z"),
          "originalIndex": 154
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T14:00:01.315Z"),
          "end": new Date("2015-08-25T14:06:30.589Z"),
          "originalIndex": 155
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:06:30.589Z"),
          "end": new Date("2015-08-25T14:07:28.100Z"),
          "originalIndex": 156
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:07:28.100Z"),
          "end": new Date("2015-08-25T14:08:04.994Z"),
          "originalIndex": 157
        },
        {
          "username": "student2",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:08:04.994Z"),
          "end": new Date("2015-08-25T14:09:07.982Z"),
          "originalIndex": 158
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:09:07.982Z"),
          "end": new Date("2015-08-25T14:15:07.339Z"),
          "originalIndex": 159
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:15:07.339Z"),
          "end": new Date("2015-08-25T14:15:58.187Z"),
          "originalIndex": 160
        }
      ]),
      "rawPhaseActivities": [
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:37:02.294Z"),
          "end": new Date("2015-08-25T12:55:45.681Z"),
          "originalIndex": 108,
          "focussed": false
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:55:45.681Z"),
          "end": new Date("2015-08-25T12:56:36.408Z"),
          "originalIndex": 109
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:56:36.408Z"),
          "end": new Date("2015-08-25T13:03:29.562Z"),
          "originalIndex": 110
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:03:29.562Z"),
          "end": new Date("2015-08-25T13:04:09.971Z"),
          "originalIndex": 111
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:04:09.971Z"),
          "end": new Date("2015-08-25T13:05:19.167Z"),
          "originalIndex": 112
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:05:19.167Z"),
          "end": new Date("2015-08-25T13:06:02.471Z"),
          "originalIndex": 113
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:06:02.471Z"),
          "end": new Date("2015-08-25T13:06:17.602Z"),
          "originalIndex": 114
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:06:17.602Z"),
          "end": new Date("2015-08-25T13:06:26.774Z"),
          "originalIndex": 115
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:06:26.774Z"),
          "end": new Date("2015-08-25T13:06:58.646Z"),
          "originalIndex": 116
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:06:58.646Z"),
          "end": new Date("2015-08-25T13:13:44.180Z"),
          "originalIndex": 117
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:13:44.180Z"),
          "end": new Date("2015-08-25T13:13:48.171Z"),
          "originalIndex": 118
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:13:48.171Z"),
          "end": new Date("2015-08-25T13:14:00.246Z"),
          "originalIndex": 119
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:14:00.246Z"),
          "end": new Date("2015-08-25T13:14:03.855Z"),
          "originalIndex": 120
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:03.855Z"),
          "end": new Date("2015-08-25T13:15:38.416Z"),
          "originalIndex": 121
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:15:38.416Z"),
          "end": new Date("2015-08-25T13:15:51.701Z"),
          "originalIndex": 122
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:15:51.701Z"),
          "end": new Date("2015-08-25T13:16:01.071Z"),
          "originalIndex": 123
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:16:01.071Z"),
          "end": new Date("2015-08-25T13:19:12.933Z"),
          "originalIndex": 124
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:12.933Z"),
          "end": new Date("2015-08-25T13:19:14.048Z"),
          "originalIndex": 125
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:14.048Z"),
          "end": new Date("2015-08-25T13:19:14.299Z"),
          "originalIndex": 126
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:14.299Z"),
          "end": new Date("2015-08-25T13:19:14.326Z"),
          "originalIndex": 127
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:14.326Z"),
          "end": new Date("2015-08-25T13:19:15.290Z"),
          "originalIndex": 128
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:19:15.290Z"),
          "end": new Date("2015-08-25T13:19:19.474Z"),
          "originalIndex": 129
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:19.474Z"),
          "end": new Date("2015-08-25T13:23:00.088Z"),
          "originalIndex": 130
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:23:00.088Z"),
          "end": new Date("2015-08-25T13:23:00.723Z"),
          "originalIndex": 131
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:00.723Z"),
          "end": new Date("2015-08-25T13:23:20.669Z"),
          "originalIndex": 132
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:23:20.669Z"),
          "end": new Date("2015-08-25T13:23:23.132Z"),
          "originalIndex": 133
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:23:23.132Z"),
          "end": new Date("2015-08-25T13:23:34.237Z"),
          "originalIndex": 134
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:23:34.237Z"),
          "end": new Date("2015-08-25T13:23:38.128Z"),
          "originalIndex": 135
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:23:38.128Z"),
          "end": new Date("2015-08-25T13:27:39.386Z"),
          "originalIndex": 136
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:27:39.386Z"),
          "end": new Date("2015-08-25T13:28:34.616Z"),
          "originalIndex": 137
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:28:34.616Z"),
          "end": new Date("2015-08-25T13:28:35.375Z"),
          "originalIndex": 138
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:28:35.375Z"),
          "end": new Date("2015-08-25T13:28:45.284Z"),
          "originalIndex": 139
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:28:45.284Z"),
          "end": new Date("2015-08-25T13:28:48.297Z"),
          "originalIndex": 140
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:28:48.297Z"),
          "end": new Date("2015-08-25T13:28:48.771Z"),
          "originalIndex": 141
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:28:48.771Z"),
          "end": new Date("2015-08-25T13:32:57.196Z"),
          "originalIndex": 142
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:32:57.196Z"),
          "end": new Date("2015-08-25T13:34:54.232Z"),
          "originalIndex": 143
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:34:54.232Z"),
          "end": new Date("2015-08-25T13:34:55.155Z"),
          "originalIndex": 144
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:55.155Z"),
          "end": new Date("2015-08-25T13:40:58.129Z"),
          "originalIndex": 145
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:40:58.129Z"),
          "end": new Date("2015-08-25T13:41:08.747Z"),
          "originalIndex": 146
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:41:08.747Z"),
          "end": new Date("2015-08-25T13:46:43.991Z"),
          "originalIndex": 147
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:46:43.991Z"),
          "end": new Date("2015-08-25T13:46:44.721Z"),
          "originalIndex": 148
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:46:44.721Z"),
          "end": new Date("2015-08-25T13:46:54.307Z"),
          "originalIndex": 149
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:46:54.307Z"),
          "end": new Date("2015-08-25T13:56:52.602Z"),
          "originalIndex": 150
        },
        {
          "username": "student2",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:56:52.602Z"),
          "end": new Date("2015-08-25T13:57:53.063Z"),
          "originalIndex": 151
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:57:53.063Z"),
          "end": new Date("2015-08-25T13:58:30.463Z"),
          "originalIndex": 152
        },
        {
          "username": "student2",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:58:30.463Z"),
          "end": new Date("2015-08-25T13:59:31.553Z"),
          "originalIndex": 153
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:59:31.553Z"),
          "end": new Date("2015-08-25T14:00:01.315Z"),
          "originalIndex": 154
        },
        {
          "username": "student2",
          "phase": "Orientation",
          "start": new Date("2015-08-25T14:00:01.315Z"),
          "end": new Date("2015-08-25T14:06:30.589Z"),
          "originalIndex": 155
        },
        {
          "username": "student2",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:06:30.589Z"),
          "end": new Date("2015-08-25T14:07:28.100Z"),
          "originalIndex": 156
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:07:28.100Z"),
          "end": new Date("2015-08-25T14:08:04.994Z"),
          "originalIndex": 157
        },
        {
          "username": "student2",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:08:04.994Z"),
          "end": new Date("2015-08-25T14:09:07.982Z"),
          "originalIndex": 158
        },
        {
          "username": "student2",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:09:07.982Z"),
          "end": new Date("2015-08-25T14:15:07.339Z"),
          "originalIndex": 159
        },
        {
          "username": "student2",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:15:07.339Z"),
          "end": new Date("2015-08-25T14:15:58.187Z"),
          "originalIndex": 160
        }
      ],
      "appActivities": Immutable.fromJS([
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:37:04.331Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:52:15.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:37.757Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:52:37.901Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:40.835Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:54:21.486Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:54:51.121Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:55:45.681Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:55:47.664Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:05.942Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:06:09.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:10.382Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:06:11.071Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:17.602Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:06:19.402Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:26.774Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:13:48.171Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:13:48.260Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:13:51.748Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:00.246Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:14:01.248Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:18:51.582Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:19:12.933Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:19:14.299Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:19:15.016Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:19:17.517Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:04.814Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:46:35.030Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:57:58.970Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:58:35.197Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:59:31.553Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:06:30.589Z")
        }
      ]),
      "rawAppActivities": [
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:37:04.331Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:52:15.578Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:37.757Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:52:37.901Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:52:40.835Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:54:21.486Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:54:51.121Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:55:45.681Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:55:47.664Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:05.942Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:06:09.153Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:10.382Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:06:11.071Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:17.602Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:06:19.402Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:06:26.774Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:13:48.171Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:13:48.260Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:13:51.748Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:14:00.246Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:14:01.248Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:18:51.582Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:19:12.933Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:19:14.299Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:19:15.016Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:19:17.517Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:23:04.814Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:46:35.030Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:57:58.970Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:58:35.197Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:59:31.553Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:06:30.589Z")
        }
      ],
      "username": "student2",
      "minimized": false,
    }),
    IMap({
      "phaseActivities": Immutable.fromJS([
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:38:09.801Z"),
          "end": new Date("2015-08-25T12:49:32.227Z"),
          "originalIndex": 161
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:49:32.227Z"),
          "end": new Date("2015-08-25T12:54:56.698Z"),
          "originalIndex": 162
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:54:56.698Z"),
          "end": new Date("2015-08-25T12:59:06.380Z"),
          "originalIndex": 163
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:59:06.380Z"),
          "end": new Date("2015-08-25T13:01:29.360Z"),
          "originalIndex": 164
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:01:29.360Z"),
          "end": new Date("2015-08-25T13:05:37.111Z"),
          "originalIndex": 165
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:05:37.111Z"),
          "end": new Date("2015-08-25T13:14:16.063Z"),
          "originalIndex": 166
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:16.063Z"),
          "end": new Date("2015-08-25T13:27:00.938Z"),
          "originalIndex": 167
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:27:00.938Z"),
          "end": new Date("2015-08-25T13:33:15.321Z"),
          "originalIndex": 168
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:33:15.321Z"),
          "end": new Date("2015-08-25T13:33:22.159Z"),
          "originalIndex": 169
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:33:22.159Z"),
          "end": new Date("2015-08-25T13:36:35.592Z"),
          "originalIndex": 170
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:36:35.592Z"),
          "end": new Date("2015-08-25T13:37:39.459Z"),
          "originalIndex": 171
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:37:39.459Z"),
          "end": new Date("2015-08-25T13:42:50.767Z"),
          "originalIndex": 172
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:42:50.767Z"),
          "end": new Date("2015-08-25T13:42:57.770Z"),
          "originalIndex": 173
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:42:57.770Z"),
          "end": new Date("2015-08-25T13:43:19.630Z"),
          "originalIndex": 174
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:19.630Z"),
          "end": new Date("2015-08-25T13:43:20.832Z"),
          "originalIndex": 175
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:20.832Z"),
          "end": new Date("2015-08-25T13:43:26.125Z"),
          "originalIndex": 176
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:26.125Z"),
          "end": new Date("2015-08-25T13:44:05.600Z"),
          "originalIndex": 177
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:44:05.600Z"),
          "end": new Date("2015-08-25T13:44:49.449Z"),
          "originalIndex": 178
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:49.449Z"),
          "end": new Date("2015-08-25T13:44:49.985Z"),
          "originalIndex": 179
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:44:49.985Z"),
          "end": new Date("2015-08-25T13:45:01.784Z"),
          "originalIndex": 180
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:45:01.784Z"),
          "end": new Date("2015-08-25T13:45:12.504Z"),
          "originalIndex": 181
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:12.504Z"),
          "end": new Date("2015-08-25T13:45:13.758Z"),
          "originalIndex": 182
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:45:13.758Z"),
          "end": new Date("2015-08-25T13:45:43.760Z"),
          "originalIndex": 183
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:43.760Z"),
          "end": new Date("2015-08-25T13:45:44.904Z"),
          "originalIndex": 184
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:45:44.904Z"),
          "end": new Date("2015-08-25T13:45:49.028Z"),
          "originalIndex": 185
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:49.028Z"),
          "end": new Date("2015-08-25T13:46:35.384Z"),
          "originalIndex": 186
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:46:35.384Z"),
          "end": new Date("2015-08-25T13:46:35.863Z"),
          "originalIndex": 187
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:46:35.863Z"),
          "end": new Date("2015-08-25T13:46:43.987Z"),
          "originalIndex": 188
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:46:43.987Z"),
          "end": new Date("2015-08-25T13:46:48.943Z"),
          "originalIndex": 189
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:46:48.943Z"),
          "end": new Date("2015-08-25T13:47:07.673Z"),
          "originalIndex": 190
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:47:07.673Z"),
          "end": new Date("2015-08-25T13:47:14.906Z"),
          "originalIndex": 191
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:47:14.906Z"),
          "end": new Date("2015-08-25T13:48:16.444Z"),
          "originalIndex": 192
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:48:16.444Z"),
          "end": new Date("2015-08-25T13:48:41.229Z"),
          "originalIndex": 193
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:48:41.229Z"),
          "end": new Date("2015-08-25T13:49:52.737Z"),
          "originalIndex": 194
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:49:52.737Z"),
          "end": new Date("2015-08-25T13:49:53.414Z"),
          "originalIndex": 195
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:49:53.414Z"),
          "end": new Date("2015-08-25T13:49:55.375Z"),
          "originalIndex": 196
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:49:55.375Z"),
          "end": new Date("2015-08-25T13:49:56.879Z"),
          "originalIndex": 197
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:49:56.879Z"),
          "end": new Date("2015-08-25T13:53:46.044Z"),
          "originalIndex": 198
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:53:46.044Z"),
          "end": new Date("2015-08-25T14:03:13.705Z"),
          "originalIndex": 199
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:03:13.705Z"),
          "end": new Date("2015-08-25T14:03:18.063Z"),
          "originalIndex": 200
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:03:18.063Z"),
          "end": new Date("2015-08-25T14:03:21.764Z"),
          "originalIndex": 201
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:03:21.764Z"),
          "end": new Date("2015-08-25T14:05:55.903Z"),
          "originalIndex": 202
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:05:55.903Z"),
          "end": new Date("2015-08-25T14:06:12.968Z"),
          "originalIndex": 203
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:06:12.968Z"),
          "end": new Date("2015-08-25T14:06:13.714Z"),
          "originalIndex": 204
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:06:13.714Z"),
          "end": new Date("2015-08-25T14:06:15.396Z"),
          "originalIndex": 205
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:06:15.396Z"),
          "end": new Date("2015-08-25T14:14:05.796Z"),
          "originalIndex": 206
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:14:05.796Z"),
          "end": new Date("2015-08-25T14:14:28.063Z"),
          "originalIndex": 207
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T14:14:28.063Z"),
          "end": new Date("2015-08-25T14:14:30.177Z"),
          "originalIndex": 208
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:14:30.177Z"),
          "end": new Date("2015-08-25T14:15:27.526Z"),
          "originalIndex": 209
        }
      ]),
      "rawPhaseActivities": [
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:38:09.801Z"),
          "end": new Date("2015-08-25T12:49:32.227Z"),
          "originalIndex": 161
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:49:32.227Z"),
          "end": new Date("2015-08-25T12:54:56.698Z"),
          "originalIndex": 162
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:54:56.698Z"),
          "end": new Date("2015-08-25T12:59:06.380Z"),
          "originalIndex": 163
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:59:06.380Z"),
          "end": new Date("2015-08-25T13:01:29.360Z"),
          "originalIndex": 164
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:01:29.360Z"),
          "end": new Date("2015-08-25T13:05:37.111Z"),
          "originalIndex": 165
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:05:37.111Z"),
          "end": new Date("2015-08-25T13:14:16.063Z"),
          "originalIndex": 166
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:14:16.063Z"),
          "end": new Date("2015-08-25T13:27:00.938Z"),
          "originalIndex": 167
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:27:00.938Z"),
          "end": new Date("2015-08-25T13:33:15.321Z"),
          "originalIndex": 168
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:33:15.321Z"),
          "end": new Date("2015-08-25T13:33:22.159Z"),
          "originalIndex": 169
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:33:22.159Z"),
          "end": new Date("2015-08-25T13:36:35.592Z"),
          "originalIndex": 170
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:36:35.592Z"),
          "end": new Date("2015-08-25T13:37:39.459Z"),
          "originalIndex": 171
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:37:39.459Z"),
          "end": new Date("2015-08-25T13:42:50.767Z"),
          "originalIndex": 172
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:42:50.767Z"),
          "end": new Date("2015-08-25T13:42:57.770Z"),
          "originalIndex": 173
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:42:57.770Z"),
          "end": new Date("2015-08-25T13:43:19.630Z"),
          "originalIndex": 174
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:19.630Z"),
          "end": new Date("2015-08-25T13:43:20.832Z"),
          "originalIndex": 175
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:20.832Z"),
          "end": new Date("2015-08-25T13:43:26.125Z"),
          "originalIndex": 176
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:26.125Z"),
          "end": new Date("2015-08-25T13:44:05.600Z"),
          "originalIndex": 177
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:44:05.600Z"),
          "end": new Date("2015-08-25T13:44:49.449Z"),
          "originalIndex": 178
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:44:49.449Z"),
          "end": new Date("2015-08-25T13:44:49.985Z"),
          "originalIndex": 179
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:44:49.985Z"),
          "end": new Date("2015-08-25T13:45:01.784Z"),
          "originalIndex": 180
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:45:01.784Z"),
          "end": new Date("2015-08-25T13:45:12.504Z"),
          "originalIndex": 181
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:12.504Z"),
          "end": new Date("2015-08-25T13:45:13.758Z"),
          "originalIndex": 182
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:45:13.758Z"),
          "end": new Date("2015-08-25T13:45:43.760Z"),
          "originalIndex": 183
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:43.760Z"),
          "end": new Date("2015-08-25T13:45:44.904Z"),
          "originalIndex": 184
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:45:44.904Z"),
          "end": new Date("2015-08-25T13:45:49.028Z"),
          "originalIndex": 185
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:45:49.028Z"),
          "end": new Date("2015-08-25T13:46:35.384Z"),
          "originalIndex": 186
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:46:35.384Z"),
          "end": new Date("2015-08-25T13:46:35.863Z"),
          "originalIndex": 187
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:46:35.863Z"),
          "end": new Date("2015-08-25T13:46:43.987Z"),
          "originalIndex": 188
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:46:43.987Z"),
          "end": new Date("2015-08-25T13:46:48.943Z"),
          "originalIndex": 189
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:46:48.943Z"),
          "end": new Date("2015-08-25T13:47:07.673Z"),
          "originalIndex": 190
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:47:07.673Z"),
          "end": new Date("2015-08-25T13:47:14.906Z"),
          "originalIndex": 191
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:47:14.906Z"),
          "end": new Date("2015-08-25T13:48:16.444Z"),
          "originalIndex": 192
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:48:16.444Z"),
          "end": new Date("2015-08-25T13:48:41.229Z"),
          "originalIndex": 193
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:48:41.229Z"),
          "end": new Date("2015-08-25T13:49:52.737Z"),
          "originalIndex": 194
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:49:52.737Z"),
          "end": new Date("2015-08-25T13:49:53.414Z"),
          "originalIndex": 195
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:49:53.414Z"),
          "end": new Date("2015-08-25T13:49:55.375Z"),
          "originalIndex": 196
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:49:55.375Z"),
          "end": new Date("2015-08-25T13:49:56.879Z"),
          "originalIndex": 197
        },
        {
          "username": "student4",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:49:56.879Z"),
          "end": new Date("2015-08-25T13:53:46.044Z"),
          "originalIndex": 198
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:53:46.044Z"),
          "end": new Date("2015-08-25T14:03:13.705Z"),
          "originalIndex": 199
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:03:13.705Z"),
          "end": new Date("2015-08-25T14:03:18.063Z"),
          "originalIndex": 200
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:03:18.063Z"),
          "end": new Date("2015-08-25T14:03:21.764Z"),
          "originalIndex": 201
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:03:21.764Z"),
          "end": new Date("2015-08-25T14:05:55.903Z"),
          "originalIndex": 202
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:05:55.903Z"),
          "end": new Date("2015-08-25T14:06:12.968Z"),
          "originalIndex": 203
        },
        {
          "username": "student4",
          "phase": "Discussion",
          "start": new Date("2015-08-25T14:06:12.968Z"),
          "end": new Date("2015-08-25T14:06:13.714Z"),
          "originalIndex": 204
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:06:13.714Z"),
          "end": new Date("2015-08-25T14:06:15.396Z"),
          "originalIndex": 205
        },
        {
          "username": "student4",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T14:06:15.396Z"),
          "end": new Date("2015-08-25T14:14:05.796Z"),
          "originalIndex": 206
        },
        {
          "username": "student4",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:14:05.796Z"),
          "end": new Date("2015-08-25T14:14:28.063Z"),
          "originalIndex": 207
        },
        {
          "username": "student4",
          "phase": "Investigation",
          "start": new Date("2015-08-25T14:14:28.063Z"),
          "end": new Date("2015-08-25T14:14:30.177Z"),
          "originalIndex": 208
        },
        {
          "username": "student4",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T14:14:30.177Z"),
          "end": new Date("2015-08-25T14:15:27.526Z"),
          "originalIndex": 209
        }
      ],
      "appActivities": Immutable.fromJS([
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:38:09.801Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:38:09.818Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:38:12.037Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:49:32.227Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:49:34.098Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:54:56.738Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:55:57.102Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:10:42.708Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:14:11.496Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:26:56.591Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:33:08.210Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:33:15.321Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:58:40.149Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:05:55.903Z")
        }
      ]),
      "rawAppActivities": [
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:38:09.801Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:38:09.818Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:38:12.037Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:49:32.227Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:49:34.098Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:54:56.738Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:55:57.102Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:10:42.708Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:14:11.496Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:26:56.591Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:33:08.210Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:33:15.321Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:58:40.149Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T14:05:55.903Z")
        }
      ],
      "username": "student4",
      "minimized": false,
    }),
    IMap({
      "phaseActivities": Immutable.fromJS([
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:36:55.685Z"),
          "end": new Date("2015-08-25T12:58:55.641Z"),
          "originalIndex": 224,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:58:55.641Z"),
          "end": new Date("2015-08-25T13:08:13.916Z"),
          "originalIndex": 225
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:08:13.916Z"),
          "end": new Date("2015-08-25T13:08:29.726Z"),
          "originalIndex": 226
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:08:29.726Z"),
          "end": new Date("2015-08-25T13:17:48.107Z"),
          "originalIndex": 227
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:17:48.107Z"),
          "end": new Date("2015-08-25T13:18:14.209Z"),
          "originalIndex": 228
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:18:14.209Z"),
          "end": new Date("2015-08-25T13:18:18.885Z"),
          "originalIndex": 229
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:18:18.885Z"),
          "end": new Date("2015-08-25T13:18:54.615Z"),
          "originalIndex": 230
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:18:54.615Z"),
          "end": new Date("2015-08-25T13:19:07.305Z"),
          "originalIndex": 231
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:07.305Z"),
          "end": new Date("2015-08-25T13:19:15.946Z"),
          "originalIndex": 232
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:15.946Z"),
          "end": new Date("2015-08-25T13:19:22.289Z"),
          "originalIndex": 233
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:22.289Z"),
          "end": new Date("2015-08-25T13:27:45.162Z"),
          "originalIndex": 234
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:45.162Z"),
          "end": new Date("2015-08-25T13:27:47.216Z"),
          "originalIndex": 235
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:47.216Z"),
          "end": new Date("2015-08-25T13:27:49.590Z"),
          "originalIndex": 236
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:49.590Z"),
          "end": new Date("2015-08-25T13:27:49.663Z"),
          "originalIndex": 237
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:49.663Z"),
          "end": new Date("2015-08-25T13:27:49.771Z"),
          "originalIndex": 238
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:49.771Z"),
          "end": new Date("2015-08-25T13:27:53.746Z"),
          "originalIndex": 239
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:53.746Z"),
          "end": new Date("2015-08-25T13:27:55.331Z"),
          "originalIndex": 240
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:55.331Z"),
          "end": new Date("2015-08-25T13:27:55.617Z"),
          "originalIndex": 241
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:55.617Z"),
          "end": new Date("2015-08-25T13:29:15.989Z"),
          "originalIndex": 242
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:29:15.989Z"),
          "end": new Date("2015-08-25T13:29:20.334Z"),
          "originalIndex": 243
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:29:20.334Z"),
          "end": new Date("2015-08-25T13:29:44.506Z"),
          "originalIndex": 244
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:29:44.506Z"),
          "end": new Date("2015-08-25T13:30:01.461Z"),
          "originalIndex": 245
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:30:01.461Z"),
          "end": new Date("2015-08-25T13:34:30.610Z"),
          "originalIndex": 246
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:30.610Z"),
          "end": new Date("2015-08-25T13:39:19.796Z"),
          "originalIndex": 247
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:39:19.796Z"),
          "end": new Date("2015-08-25T13:39:20.454Z"),
          "originalIndex": 248
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:39:20.454Z"),
          "end": new Date("2015-08-25T13:39:36.618Z"),
          "originalIndex": 249
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:39:36.618Z"),
          "end": new Date("2015-08-25T13:39:37.375Z"),
          "originalIndex": 250
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:39:37.375Z"),
          "end": new Date("2015-08-25T13:40:49.222Z"),
          "originalIndex": 251
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:40:49.222Z"),
          "end": new Date("2015-08-25T13:40:51.816Z"),
          "originalIndex": 252
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:40:51.816Z"),
          "end": new Date("2015-08-25T13:43:21.083Z"),
          "originalIndex": 253,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:43:21.083Z"),
          "end": new Date("2015-08-25T13:43:23.497Z"),
          "originalIndex": 254
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:23.497Z"),
          "end": new Date("2015-08-25T13:43:41.046Z"),
          "originalIndex": 255
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:43:41.046Z"),
          "end": new Date("2015-08-25T13:43:42.226Z"),
          "originalIndex": 256
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:43:42.226Z"),
          "end": new Date("2015-08-25T13:43:57.398Z"),
          "originalIndex": 257
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:57.398Z"),
          "end": new Date("2015-08-25T13:43:59.074Z"),
          "originalIndex": 258
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:59.074Z"),
          "end": new Date("2015-08-25T13:43:59.744Z"),
          "originalIndex": 259
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:59.744Z"),
          "end": new Date("2015-08-25T13:51:16.814Z"),
          "originalIndex": 260
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:51:16.814Z"),
          "end": new Date("2015-08-25T13:58:16.392Z"),
          "originalIndex": 261
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:58:16.392Z"),
          "end": new Date("2015-08-25T14:14:58.962Z"),
          "originalIndex": 262,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:14:58.962Z"),
          "end": new Date("2015-08-25T14:15:39.556Z"),
          "originalIndex": 263
        }
      ]),
      "rawPhaseActivities": [
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T12:36:55.685Z"),
          "end": new Date("2015-08-25T12:58:55.641Z"),
          "originalIndex": 224,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T12:58:55.641Z"),
          "end": new Date("2015-08-25T13:08:13.916Z"),
          "originalIndex": 225
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:08:13.916Z"),
          "end": new Date("2015-08-25T13:08:29.726Z"),
          "originalIndex": 226
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:08:29.726Z"),
          "end": new Date("2015-08-25T13:17:48.107Z"),
          "originalIndex": 227
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:17:48.107Z"),
          "end": new Date("2015-08-25T13:18:14.209Z"),
          "originalIndex": 228
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:18:14.209Z"),
          "end": new Date("2015-08-25T13:18:18.885Z"),
          "originalIndex": 229
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:18:18.885Z"),
          "end": new Date("2015-08-25T13:18:54.615Z"),
          "originalIndex": 230
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:18:54.615Z"),
          "end": new Date("2015-08-25T13:19:07.305Z"),
          "originalIndex": 231
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:07.305Z"),
          "end": new Date("2015-08-25T13:19:15.946Z"),
          "originalIndex": 232
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:19:15.946Z"),
          "end": new Date("2015-08-25T13:19:22.289Z"),
          "originalIndex": 233
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:19:22.289Z"),
          "end": new Date("2015-08-25T13:27:45.162Z"),
          "originalIndex": 234
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:45.162Z"),
          "end": new Date("2015-08-25T13:27:47.216Z"),
          "originalIndex": 235
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:47.216Z"),
          "end": new Date("2015-08-25T13:27:49.590Z"),
          "originalIndex": 236
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:49.590Z"),
          "end": new Date("2015-08-25T13:27:49.663Z"),
          "originalIndex": 237
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:49.663Z"),
          "end": new Date("2015-08-25T13:27:49.771Z"),
          "originalIndex": 238
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:49.771Z"),
          "end": new Date("2015-08-25T13:27:53.746Z"),
          "originalIndex": 239
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:53.746Z"),
          "end": new Date("2015-08-25T13:27:55.331Z"),
          "originalIndex": 240
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:27:55.331Z"),
          "end": new Date("2015-08-25T13:27:55.617Z"),
          "originalIndex": 241
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:27:55.617Z"),
          "end": new Date("2015-08-25T13:29:15.989Z"),
          "originalIndex": 242
        },
        {
          "username": "student6",
          "phase": "Investigation",
          "start": new Date("2015-08-25T13:29:15.989Z"),
          "end": new Date("2015-08-25T13:29:20.334Z"),
          "originalIndex": 243
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:29:20.334Z"),
          "end": new Date("2015-08-25T13:29:44.506Z"),
          "originalIndex": 244
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:29:44.506Z"),
          "end": new Date("2015-08-25T13:30:01.461Z"),
          "originalIndex": 245
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:30:01.461Z"),
          "end": new Date("2015-08-25T13:34:30.610Z"),
          "originalIndex": 246
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:34:30.610Z"),
          "end": new Date("2015-08-25T13:39:19.796Z"),
          "originalIndex": 247
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:39:19.796Z"),
          "end": new Date("2015-08-25T13:39:20.454Z"),
          "originalIndex": 248
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:39:20.454Z"),
          "end": new Date("2015-08-25T13:39:36.618Z"),
          "originalIndex": 249
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:39:36.618Z"),
          "end": new Date("2015-08-25T13:39:37.375Z"),
          "originalIndex": 250
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:39:37.375Z"),
          "end": new Date("2015-08-25T13:40:49.222Z"),
          "originalIndex": 251
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:40:49.222Z"),
          "end": new Date("2015-08-25T13:40:51.816Z"),
          "originalIndex": 252
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:40:51.816Z"),
          "end": new Date("2015-08-25T13:43:21.083Z"),
          "originalIndex": 253,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:43:21.083Z"),
          "end": new Date("2015-08-25T13:43:23.497Z"),
          "originalIndex": 254
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:23.497Z"),
          "end": new Date("2015-08-25T13:43:41.046Z"),
          "originalIndex": 255
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T13:43:41.046Z"),
          "end": new Date("2015-08-25T13:43:42.226Z"),
          "originalIndex": 256
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:43:42.226Z"),
          "end": new Date("2015-08-25T13:43:57.398Z"),
          "originalIndex": 257
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:57.398Z"),
          "end": new Date("2015-08-25T13:43:59.074Z"),
          "originalIndex": 258
        },
        {
          "username": "student6",
          "phase": "Discussion",
          "start": new Date("2015-08-25T13:43:59.074Z"),
          "end": new Date("2015-08-25T13:43:59.744Z"),
          "originalIndex": 259
        },
        {
          "username": "student6",
          "phase": "Conclusion",
          "start": new Date("2015-08-25T13:43:59.744Z"),
          "end": new Date("2015-08-25T13:51:16.814Z"),
          "originalIndex": 260
        },
        {
          "username": "student6",
          "phase": "Orientation",
          "start": new Date("2015-08-25T13:51:16.814Z"),
          "end": new Date("2015-08-25T13:58:16.392Z"),
          "originalIndex": 261
        },
        {
          "username": "student6",
          "phase": "ConceptCloud",
          "start": new Date("2015-08-25T13:58:16.392Z"),
          "end": new Date("2015-08-25T14:14:58.962Z"),
          "originalIndex": 262,
          "focussed": false
        },
        {
          "username": "student6",
          "phase": "Conceptualisation",
          "start": new Date("2015-08-25T14:14:58.962Z"),
          "end": new Date("2015-08-25T14:15:39.556Z"),
          "originalIndex": 263
        }
      ],
      "appActivities": Immutable.fromJS([
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:55.685Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:36:55.725Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:57.769Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:58:13.201Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:58:51.571Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:58:56.211Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:58:56.247Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:58:57.019Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:05:40.638Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:06:29.475Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:07:00.168Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:07:57.612Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:08:13.916Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:27:49.663Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:27:49.771Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:27:55.617Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:29:16.037Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:29:21.016Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:29:47.957Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:30:01.461Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:41:17.629Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:59:38.924Z")
        }
      ]),
      "rawAppActivities": [
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:55.685Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:36:55.725Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:36:57.769Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:58:13.201Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T12:58:51.571Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:58:56.211Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T12:58:56.247Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T12:58:57.019Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:05:40.638Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:06:29.475Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:07:00.168Z")
        },
        {
          "targetname": "Hypothesis Scratchpad",
          "timestamp": new Date("2015-08-25T13:07:57.612Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:08:13.916Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:27:49.663Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:27:49.771Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:27:55.617Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:29:16.037Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:29:21.016Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:29:47.957Z")
        },
        {
          "targetname": "Wiki",
          "timestamp": new Date("2015-08-25T13:30:01.461Z")
        },
        {
          "targetname": "Concept Mapper",
          "timestamp": new Date("2015-08-25T13:41:17.629Z")
        },
        {
          "targetname": "Concept Cloud",
          "timestamp": new Date("2015-08-25T13:59:38.924Z")
        }
      ],
      "username": "student6",
      "minimized": false,
    })
  ]),
});
