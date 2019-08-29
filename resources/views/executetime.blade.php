<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <style media="screen">
      .ticket{
        border: 2px solid green;
        margin: 5px;
      }
      .ticket-reply{
        margin-left: 100px;
        margin-right: 100px;
        border: 2px solid black;
      }
      .attach{
        margin-left: 20px;
        margin-right: 20px;
        border: 2px solid blue;
      }
    </style>
  </head>
  <body>
    <div class="">
      @foreach ($users as $key => $user)
        <div class="user">
          <p style="color:red">{{ $user->id }} = {{ $user->email }}</p>
          @foreach ($user->tickets as $key => $tikcet)
            <div class="ticket">
              <p>{{ $tikcet->queue }}</p>
              <div class="ticket-reply">
                @foreach ($tikcet->ticketReply as $key => $treply)
                  <p>{{ $treply->user_id }}</p>
                  <p>{{ $treply->reply }}</p>

                  <div class="">
                    @foreach ($treply->ticketAttach as $key => $attach)
                      <div class="attach">
                        <p>{{ $attach->file }}</p>
                      </div>
                    @endforeach
                  </div>
                  <hr>
                @endforeach
              </div>
            </div>
          @endforeach
        </div>
      @endforeach


    </div>
  </body>
</html>
