import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CircleHelp } from 'lucide-react';
import { useWebSocket } from '@/WebSocketContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const PlayerWait = () => {
	const { connectWebSocket } = useWebSocket();
	const navigate = useNavigate();

	const client_id = uuid();

	const handleCreateRoom = () => {
		const url = `${process.env.VITE_WS_URL}/ws?client_id=${client_id}`;
		connectWebSocket(url);
		navigate('/prepare', { state: { roomId: '', clientId: client_id } });
	};

	const handleEnterRoom: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const room_id = form.get('roomId') || '';
		const url = `${process.env.VITE_WS_URL}/ws?client_id=${client_id}&room_id=${room_id}`;
		connectWebSocket(url);
		navigate('/prepare', { state: { roomId: room_id, clientId: client_id } });
	};

	export default function Playerwait() {
		return (
	
		);
	}


	return (
			<div className="h-screen w-screen flex justify-center items-center">
				<h1 className="text-3xl font-bold animate-pulse">ゲームマスターが投票を完了するまでお待ちください ・ ・ ・</h1>
		</div>
	);
};

export default PlayerWait;
